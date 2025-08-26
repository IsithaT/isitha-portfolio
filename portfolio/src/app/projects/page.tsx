import React from 'react';
import NavBar from '@/components/NavBar';
import { getSortedPostsData } from './articleParse';
import path from 'path';
import Link from "next/link";

const projectDir = path.join(process.cwd(), 'src/articles/projects');

interface PostData {
  title: string;
  image: string;
  description: string;
  date: string;
  slug: string;
  tags: string[];
  id: string;
  pageContent: string;
}

const Projects = () => {
  const postsData: PostData[] = getSortedPostsData(projectDir);

  return (
    <div className="flex flex-col min-h-screen w-full font-sans bg-white">
      <NavBar />

      <main className="flex flex-col items-center justify-center flex-1 px-6 md:px-16 py-12 gap-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Projects</h1>

        <div className="flex flex-col gap-12 w-full max-w-5xl">
          {postsData.map(post => (
            <div
              key={post.id}
              className="flex flex-col md:flex-row items-center gap-6 w-full bg-white rounded-xl shadow-sm p-4"
            >
              {/* Image */}
              <div className="w-full md:w-1/2 rounded-xl overflow-hidden aspect-video">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 gap-4">
                <h2 className="text-2xl md:text-3xl font-bold">{post.title}</h2>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  {post.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded-lg font-mono bg-gray-200 text-[#A12347] text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={"projects/project/" + post.slug}
                  className="self-start mt-2"
                >
                  <span className="px-4 py-2 rounded-lg text-white bg-theme-accent hover:bg-[#A12347] transition-colors text-sm md:text-base">
                    Project Article
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;
