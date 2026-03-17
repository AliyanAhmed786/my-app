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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 w-full max-w-7xl">
        <ProjectCard
          link="https://todo-app-hackathon-2-eight.vercel.app/"
          src="/todo.png"
          title="Todo App"
          description="This is a simple and user-friendly Todo app built using Next.js, Tailwind CSS, and Shadcn. It allows users to easily manage their tasks and stay organized and use AI to generate tasks based on user input."
        />
        <ProjectCard
          link="https://humanoid-robotics-book-psi.vercel.app/"
          src="/book.png"
          title="Humanoid Robotics Book"
          description="This project is a book website built using Next.js, Tailwind CSS, and Shadcn. It providing an engaging reading experience for users interested in humanoid robotics and use RAG chatbot."
        />
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