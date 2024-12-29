import Image from "next/image";
import React from "react";
import Link from "next/link"; // Import Link from Next.js

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  return (
    <Link href={link} target="_blank" className="cursor-pointer relative z-30">
      <div className="relative h-[400px] hover:border-white hover:bg-purple-300/15 overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] cursor-pointer">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-contain"
        />
  
        <div className="relative p-4">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
