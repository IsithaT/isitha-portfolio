import matter from 'gray-matter'
import fs from 'fs';
import path from 'path';

export function getSortedPostsData(directory: string) {
    // Get file names under /posts
    const fileNames = fs.readdirSync(directory)
                        .filter(fileName => fs.statSync(path.join(directory, fileName)).isFile() && fileName.endsWith('.md'));

    const allPostsData = fileNames.map(fileName => {
        // Get unique id from filename 
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(directory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Convert the markdown to HTML without frontmatter
        const pageContent: string = ParseMDtoHTML(matterResult.content)

        // Combine the data with the id
        return {
            id: id,
            pageContent: pageContent,
            title: matterResult.data.title,
            image: matterResult.data.image,
            description: matterResult.data.description,
            date: matterResult.data.date,
            slug: matterResult.data.slug,
            tags: matterResult.data.tags
        };
    });

    // Return the parsed data
    // console.log(allPostsData)
    return allPostsData;
}

import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import rehypeStringify from "rehype-stringify"
import rehypeHighlight from 'rehype-highlight'
import rehypeSanitize from "rehype-sanitize"

export function ParseMDtoHTML(markdown: string) {
    const result = unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeSanitize)
        .use(rehypeHighlight)
        .use(rehypeStringify)
        .processSync(markdown)
        .toString();

    return result;
}