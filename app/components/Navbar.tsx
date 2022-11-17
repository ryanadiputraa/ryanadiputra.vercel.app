import React, { Dispatch, SetStateAction } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

interface Props {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

export default function Navbar({ darkMode, setDarkMode }: Props) {
  return (
    <nav className="flex justify-between items-center w-full mb-8">
      <a
        className="py-2 px-4 text-md bg-teal-500 text-gray-200 rounded"
        href="#"
      >
        Resume
      </a>
      <ul className="flex items-center">
        <li
          className="cursor-pointer mr-8 text-2xl dark:text-gray-200"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? (
            <i className=" text-grey-200 hover:text-white transition duration-500">
              <BsFillMoonStarsFill />
            </i>
          ) : (
            <i className=" text-orange-400 hover:text-orange-300 transition duration-500">
              <BsFillSunFill />
            </i>
          )}
        </li>
      </ul>
    </nav>
  );
}
