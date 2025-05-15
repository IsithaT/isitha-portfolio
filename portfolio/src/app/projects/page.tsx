import React from 'react'
import NavBar from '@/components/NavBar'
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
        <div className="flex flex-col h-screen w-full">
            <NavBar />
            <div className="flex h-screen w-full flex-col items-center">
                <span className='mt-[100px] prose'>
                  <h2>Projects</h2>
                </span>
                <div className="w-[65%] h-[100] min-h-fit flex flex-col gap-13 justify-between mt-[100px]">
                    {/* Render the parsed markdown data */}
                    {postsData.map(post => (
                      <div className='flex flex-col w-full mb-[80px] ' key={post.id}>
                        <span className='prose pb-2'>
                          <h2>{post.title}</h2>
                        </span>
                        <div className='w-full flex justify-between gap-3'>
                            <div className='prose flex-1'>
                              <img src={post.image} alt={post.title} className="w-full rounded-lg" />
                            </div>
                            
                            <div className='flex flex-col flex-1 gap-[15px]'>
                              <p className='prose prose-xl flex-1 overflow-clip'>{post.description}</p>
                              <Link href={"projects/project/"+post.slug} className='self-center' ><span className='p-[10px] w-[100px] rounded-xl text-white bg-theme-accent'>Project Article</span></Link>
                            </div>
                        </div>
                        <ul className='flex w-full pt-3 gap-3'>
                          {post.tags.map(tag => (
                            <li className='px-2 py-1 rounded-lg font-mono min-w-[80px] text-center bg-gray-300 text-[#A12347]' key={post.tags.indexOf(tag)}><b>{tag}</b></li>
                          ))}
                        </ul>
                      </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects