"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromTop } from "../../utils/motion";

const Encryption = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full relative">
      {/* Performance & Security Text */}
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Performance
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &{" "}
          </span>
          Security
        </motion.div>
      </div>

      {/* Lock Images Container */}
      <div className="mt-20 flex flex-col items-center justify-center absolute z-[20] w-auto h-auto overflow-hidden">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          {/* LockTop Image */}
          <Image
            src="/LockTop.png"
            alt="Lock top"
            width={40} // Adjusted size for mobile
            height={40} // Adjusted size for mobile
            className="w-[30px] sm:w-[50px] md:w-[80px] lg:w-[100px] 
              translate-y-[10px] sm:translate-y-[15px] md:translate-y-[15px] lg:translate-y-[15px] 
              transition-all duration-200 group-hover:translate-y-[20px] sm:group-hover:translate-y-[25px] md:group-hover:translate-y-[30px] lg:group-hover:translate-y-[35px]"
          />
          {/* LockMain Image */}
          <Image
            src="/LockMain.png"
            alt="Lock Main"
            width={70} // Adjusted size for mobile
            height={70} // Adjusted size for mobile
            className="z-10 w-[50px] sm:w-[60px] md:w-[120px] lg:w-[180px]"
          />
        </div>

        <div className="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#7042f88b] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px] md:text-[16px]">Encryption</h1>
        </div>
      </div>

      {/* Text below Lock Images */}
      <div className="absolute z-[20] bottom-[10px] px-[5px] w-full text-center">
        <div className="cursive text-[16px] font-medium text-gray-300 md:text-[20px]">
          Secure your data with end-to-end encryption
        </div>
      </div>

      {/* Video Section */}
      <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto object-cover"
          src="/encryption.webm/"
        />
      </div>
    </div>
  );
};

export default Encryption;
