'use client';

import { useState } from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  // State to control mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        {/* Logo and Brand Name */}
        <Link href="#Hero" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hover:text-purple-400 hidden md:block text-gray-300">
            Aliyan Ahmed
          </span>
        </Link>

        {/* Desktop Menu (Links) */}
        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 hidden md:flex">
            <a href="#skills" className="cursor-pointer hover:text-purple-400">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer hover:text-purple-400">
              Projects
            </a>
            <Link href="#contact" className="cursor-pointer hover:text-purple-400">
              Contact
            </Link>
          </div>
        </div>

        {/* Social Icons for Desktop */}
        <div className="flex-row gap-5 text-white hidden md:flex">
          <Link
            href="https://www.linkedin.com/in/aliyan-ahmed-flutter-developer/"
            target="_blank"
            className="hover:text-purple-400"
          >
            <FaLinkedinIn />
          </Link>

          <Link
            href="https://github.com/AliyanAhmed786"
            target="_blank"
            className="hover:text-purple-400"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.facebook.com/aliyan.ahmed.3367/?_rdr"
            target="_blank"
            className="hover:text-purple-400"
          >
            <FaFacebookF />
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden w-full p-4 bg-purple-300/80 text-white flex flex-col items-center transition-all duration-300 ease-in-out ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <Link href="#Hero" className="py-2 hover:text-purple-900 w-full text-center" onClick={() => setIsMenuOpen(false)}>
          Home
        </Link>
        <Link href="#skills" className="py-2 hover:text-purple-900 w-full text-center" onClick={() => setIsMenuOpen(false)}>
          Skills
        </Link>
        <Link href="#projects" className="py-2 hover:text-purple-900 w-full text-center" onClick={() => setIsMenuOpen(false)}>
          Projects
        </Link>
        <Link href="#contact" className="py-2 hover:text-purple-900 w-full text-center" onClick={() => setIsMenuOpen(false)}>
          Contact
        </Link>

        {/* Social Icons in Mobile Menu */}
        <div className="flex gap-5 text-white mt-4">
          <Link
            href="https://www.linkedin.com/in/aliyan-ahmed-flutter-developer/"
            target="_blank"
            className="hover:text-purple-400"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaLinkedinIn />
          </Link>
          <Link
            href="https://github.com/AliyanAhmed786"
            target="_blank"
            className="hover:text-purple-400"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.facebook.com/aliyan.ahmed.3367/?_rdr"
            target="_blank"
            className="hover:text-purple-400"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaFacebookF />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
