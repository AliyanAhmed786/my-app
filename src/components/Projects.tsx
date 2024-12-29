import React from "react";
import ProjectCard from "./sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          link="https://blog-blue-omega-50.vercel.app/"
          src="/s.png"
          title="Blog Website"
          description="This blog website showcases a clean and responsive design built using the next.js and shadcn with component base code."
        />
        <ProjectCard
          link="https://hackathon-project-hazel.vercel.app/"
          src="/hackathon project1.png"
          title="Hackathon Project"
          description="My first hackathon,I developed resume builder using HTML, CSS and JS enabling users to easily edit and download resume."

        />
        <ProjectCard
        link="https://hackathon-project02-eight.vercel.app/"
          src="/Group 6.png"
          title="Hackathon 02 Project"
          description=" My second hackathon project, I developed a website for a local business using Next.js,Tailwind CSS and Shadcn."
        />
      </div>
    </div>
  );
};

export default Projects;