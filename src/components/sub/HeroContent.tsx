"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "../../../utils/motion";
import SparklesIcon from "@heroicons/react/24/solid/SparklesIcon";
import Image from "next/image";

function HeroContent() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-4 md:px-20 mt-40 z-[20] w-full"
    >
      {/* Text Content Section */}
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        {/* Welcome Box */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Front-end Developer Portfolio</h1>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col mt-6 gap-6 text-4xl md:text-6xl font-bold text-white max-w-full w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project experience
          </span>
        </motion.div>

        {/* Description Text */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-full md:max-w-[600px]"
        >
          I&apos;m a front-end developer with a passion for creating beautiful and functional websites. I specialize in React, Next.js, and Tailwind CSS. I&apos;m always looking for new opportunities to learn and grow as a developer. Checkout my projects and skills!
        </motion.p>

        {/* Learn More Button */}
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a>
      </div>

      {/* Image Section */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="flex items-center justify-center w-full h-full mt-10 md:mt-0"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work Icons"
          height={650}
          width={650}
          className="w-full h-auto max-w-[650px]"
        />
      </motion.div>
    </motion.div>
  );
}

export default HeroContent;
