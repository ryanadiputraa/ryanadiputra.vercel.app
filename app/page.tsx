"use client";

import { useState} from "react";
import Image from "next/image";

import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";

import WaveAvatar from "../public/dev-ed-wave.png"

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <main className="px-8 bg-gray-200 dark:bg-gray-900">
        <section className="min-h-screen py-10">
          <nav className="flex justify-between items-center w-full mb-12">
            <a href="#" className="cursor-pointer">
              <h2 className=" text-lg font-burtons dark:text-gray-200">Articles</h2>
            </a>
            <ul className="flex items-center">
              <li className="cursor-pointer mr-8 text-2xl dark:text-gray-200" onClick={() => setDarkMode(!darkMode)}>
                  <BsFillMoonStarsFill />
              </li>
              <li className="cursor-pointer">
                <a className="py-2 px-4 text-lg bg-teal-500 text-gray-200 rounded" href="#">Resume</a>
              </li>
            </ul>
          </nav>
          <div className="w-full flex flex-col items-center text-center p-8">
            <h1 className="text-5xl text-teal-500 uppercase">Ryan Adi Putra</h1>
            <h3 className="text-2xl mt-2 dark:text-gray-200">Software Engineer</h3>
            <p className="text-md leading-8 mt-4 text-gray-500 lg:px-48">
              Software Engineer specialized in iOS App Development with
              experienced in fullstack Web development demonstrated in past internship and side projects.
            </p>
            <div className="flex text-5xl gap-16 mt-4 text-gray-500">
              <AiFillLinkedin />
              <AiFillGithub />
              <AiFillInstagram />
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