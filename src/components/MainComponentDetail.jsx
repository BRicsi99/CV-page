import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillGitlab } from "react-icons/ai";

function MainComponentDetail() {
  return (
    <div
      id="profile"
      className="h-128 overflow-y-scroll w-full lg:w-3/5 rounded-lg lg:rounded-r-lg lg:rounded-l-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
    >
      <div className="p-4 md:p-12 text-center lg:text-left">
        <div
          className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
          style={{
            backgroundImage: `url('images/DSC_5579_phone.jpg')`,
          }}
        ></div>

        <h1 className="text-3xl font-bold pt-8 lg:pt-0">Bárdos Richárd</h1>
        <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
        <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
          What you do
        </p>
        <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
          Your Location - 25.0000° N, 71.0000° W
        </p>
        <p className="pt-8 text-sm">
          Totally optional short description about yourself, what you do and so
          on.
        </p>

        <div className="pt-12 pb-8">
          <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
            Get In Touch
          </button>
        </div>

        <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center gap-7">
          <a className="link" href="https://github.com/BRicsi99">
            <FaGithub
              size="2rem"
              className="h-8 fill-current text-gray-600 hover:text-green-700"
            />
          </a>
          <a className="link" href="https://gitlab.com/bardosrichard99">
            <AiFillGitlab
              size="2rem"
              className="h-8 fill-current text-gray-600 hover:text-green-700"
            />
          </a>
          <a
            className="link"
            href="https://www.linkedin.com/in/richard-bardos/"
          >
            <FaLinkedin
              size="2rem"
              className="h-8 fill-current text-gray-600 hover:text-green-700"
            />
          </a>
        </div>
        <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center gap-7">
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Download CV
            </span>
          </button>
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Contact me
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainComponentDetail;
