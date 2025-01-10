import React from 'react'
import NavBar from '@/components/NavBar'
import { getSortedPostsData } from '../../articleParse';
import path from 'path';
import Link from 'next/link';

const projectDir = path.join(process.cwd(), 'src/articles/projects');

interface PostData {
    id: string;
    pageContent: string;
    title: string;
    image: string;
    description: string;
    date: string;
    slug: string;
    tags: string[];
}

interface Props {
    params: Promise<{
        slug: string
    }>
}

const ProjectPage = async ({ params }: Props) => {
    const { slug } = await params;
    const postData: PostData[] = getSortedPostsData(projectDir).filter(post => post.slug === slug);
    
    return (
        <div className="flex flex-col h-screen w-full">
            <NavBar />
                <Link className='p-[8px] justify-start align-baseline prose ml-[30px] mt-[150px] text-grey-800 text-xl fixed' href="/projects"><b>⪡ All Projects</b></Link>

            <div className="flex h-screen w-full flex-col items-center">
                <span className='mt-[100px] prose'>
                  <h1>{postData[0].title}</h1>
                </span>

                <div className="w-[65%] h-[100] min-h-fit flex flex-col gap-13 justify-between mt-[100px] pb-[200px]">
                    {/* Render the parsed markdown data */}
                    {postData.length > 0 && (
                        <div className='prose-full-width' dangerouslySetInnerHTML={{ __html: postData[0].pageContent }}></div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default ProjectPage