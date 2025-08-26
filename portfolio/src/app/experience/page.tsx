import React from 'react';
import NavBar from '@/components/NavBar';
import { getSortedEducationData, getSortedExperienceData } from './articleParse';
import path from 'path';

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

const EducationExperience = () => {
  const educationData: EducationData[] = getSortedEducationData(educationDir);
  const experienceData: ExperienceData[] = getSortedExperienceData(experienceDir);

  return (
    <div className="flex flex-col min-h-screen w-full font-sans bg-white">
      <NavBar />

      <main className="flex flex-col items-center justify-center flex-1 px-6 md:px-16 py-12 gap-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">Education & Experience</h1>

        {/* Education Section */}
        <section className="w-full max-w-5xl flex flex-col gap-8">
          <h2 className="text-3xl font-semibold mb-4 border-b-2 border-gray-300 pb-2">Education</h2>
          {educationData.map((edu) => (
            <div key={edu.id} className="flex flex-col gap-2 p-4 rounded-xl bg-gray-50 shadow-sm">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">{edu.degree}</h3>
                <p className="text-sm italic text-gray-600">{edu.date}</p>
              </div>
              <p className="text-gray-700 font-semibold">{edu.institution}</p>
            </div>
          ))}
        </section>

        {/* Experience Section */}
        <section className="w-full max-w-5xl flex flex-col gap-8 mt-12">
          <h2 className="text-3xl font-semibold mb-4 border-b-2 border-gray-300 pb-2">Experience</h2>
          {experienceData.map((exp) => (
            <div key={exp.id} className="flex flex-col gap-2 p-4 rounded-xl bg-gray-50 shadow-sm">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <p className="text-sm italic text-gray-600">{exp.date}</p>
              </div>
              <p className="text-gray-700 font-semibold">{exp.organization}</p>
              <div
                className="prose max-w-full mt-2"
                dangerouslySetInnerHTML={{ __html: exp.pageContent }}
              />
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default EducationExperience;
