import Image from "next/image";
import React from "react";
import Link from "next/link";

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
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={src}
            alt={title}
            width={1000}
            height={1000}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-4 flex flex-col">
          <h1 className="text-xl font-semibold text-white mb-2 line-clamp-1">{title}</h1>
          <p className="text-gray-300 text-sm line-clamp-4">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
