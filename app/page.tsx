"use client";

import { useState } from "react";
import Image from "next/image";

import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";

import WaveAvatar from "/public/dev-ed-wave.png";
import Navbar from "./components/Navbar";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <main className="px-8 bg-gray-200 dark:bg-gray-900 transition duration-500">
        <section className="min-h-screen py-10">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <div className="w-full flex flex-col items-center text-center p-8">
            <h1 className="text-3xl md:text-5xl text-teal-500 font-burtons">
              Ryan Adi Putra
            </h1>
            <h3 className="text-xl md:text-2xl mt-2 dark:text-gray-200">
              Software Engineer
            </h3>
            <p className="text-md leading-8 mt-4 text-gray-500 lg:px-48">
              Software Engineer specialized in iOS App Development with
              experienced in fullstack Web development demonstrated in past
              internship and side projects.
            </p>
            <div className="flex text-5xl gap-10 md:gap-16 mt-4">
              <a
                href="https://www.linkedin.com/in/ryanadiputraa/"
                target="_blank"
                className="cursor-pointer text-gray-500 hover:text-gray-200 transition duration-500"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://github.com/ryanadiputraa"
                target="_blank"
                className="cursor-pointer text-gray-500 hover:text-gray-200 transition duration-500"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.instagram.com/bukanryan/"
                target="_blank"
                className="cursor-pointer text-gray-500 hover:text-gray-200 transition duration-500"
              >
                <AiFillInstagram />
              </a>
            </div>
            <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 grid place-items-center mt-10 overflow-hidden">
              <Image src={WaveAvatar} alt="" fill className="object-cover" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
