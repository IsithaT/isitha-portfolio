import React from 'react'
import NavBar from '@/components/NavBar'
import { getSortedEducationData, getSortedExperienceData } from './articleParse';
import path from 'path';
import Link from "next/link";


const experienceDir = path.join(process.cwd(), 'src/articles/experience');
const educationDir = path.join(process.cwd(), 'src/articles/education');

interface EducationData {
  id: string;
  date: string;
  degree: string;
  institution: string;
}

interface ExperienceData {
  id: string;
  date: string;
  title: string;
  organization: string;
  pageContent: string;
}

const Projects = () => {
    const educationData: EducationData[] = getSortedEducationData(educationDir);
    const experienceData: ExperienceData[] = getSortedExperienceData(experienceDir);

    return (
        <div className="flex flex-col h-screen w-full">
            <NavBar />
            <div className="flex h-screen w-full flex-col items-center">
                <span className='mt-[100px] prose'>
                  <h2>Education & Experience</h2>
                </span>
                <div className="w-[65%] h-[100] min-h-fit flex flex-col gap-13 justify-between mt-[100px]">
                    <span className="prose mb-[20px]">
                      <h2>Education</h2>
                    </span>
                    {educationData.map(post => (
                      <div className='flex flex-col w-full mb-[20px]' key={post.id}>
                        <div className="flex justify-between">
                          <span className="prose">
                            <h3>{post.degree}</h3>
                          </span>
                          <p><i>{post.date}</i></p>
                        </div>
                        <span className="prose">
                          <p><b>{post.institution}</b></p>
                        </span>
                      </div>
                    ))}

                    <hr className='border-2 border-gray-500 rounded-full mt-[40px] mb-[45px]' />

                    <span className="prose mb-[20px]">
                      <h2>Experience</h2>
                    </span>
                    {experienceData.map(post => (
                      <div className='flex flex-col w-full mb-[20px]' key={post.id}>
                        <div className="flex justify-between">
                          <span className="prose">
                            <h3>{post.title}</h3>
                          </span>
                          <p><i>{post.date}</i></p>
                        </div>
                        <span className="prose">
                          <p><b>{post.organization}</b></p>
                        </span>
                        {/* <span className="prose"> */}
                          <div className="prose-full-width mx-[40px]" dangerouslySetInnerHTML={{ __html: post.pageContent }}></div>
                        {/* </span> */}
                      </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Projects