import React, { useContext } from "react";
import PopUpContext from "../context/PopUpContext";
import { RxCross2 } from "react-icons/rx";
import { FaEye, FaLink } from "react-icons/fa";
import { AiFillGitlab } from "react-icons/ai";

function PopUp() {
  const { src, title, progress, url, gitlab, setHidden } =
    useContext(PopUpContext);

  return (
    <div
      id="modal"
      className="fixed top-0 left-0 z-80 w-screen h-screen bg-black/70 flex justify-center items-center"
    >
      <div className="relative w-5/6 max-h-8/10 max-w-5/6 bg-white rounded-lg shadow dark:bg-gray-700">
        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="defaultModal"
            onClick={setHidden}
          >
            <RxCross2 size="1.5rem" />
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="flex p-6">
          <div className="w-1/2 pr-2 h-144">
            <a href={url} target="_blank">
              <img
                id="modal-img"
                src={src}
                className="object-cover object-top h-full w-full rounded-md border shadow"
              />
            </a>
          </div>

          <div className="w-1/2 pl-2">
            <div className="mb-2 h-full p-6 rounded-md card bg-white border border-gray-200 hover:bg-light-green-250 shadow text-black">
              <div className="">
                <h3 className="mb-2 text-2xl font-semibold">{title}</h3>
                <div className="mx-auto lg:mx-0 w-4/5 my-5 border-b-2 border-green-500 opacity-25"></div>
                <p className="mb-3 text-lg text-gray-400">
                  {
                    "DescriptionDescription Description Description Description Description"
                  }
                </p>
                <div className="flex gap-5 my-3">
                  <a className="link cursor-pointer" href={url} target="_blank">
                    <FaLink
                      size="1.7rem"
                      className="h-10 fill-current text-gray-600 hover:text-green-700"
                    />
                  </a>
                  <a
                    className="link cursor-pointer"
                    href={gitlab}
                    target="_blank"
                  >
                    <AiFillGitlab
                      size="2rem"
                      className="h-10 fill-current text-gray-600 hover:text-green-700"
                    />
                  </a>
                </div>

                <div className="flex">
                  <div className="mr-3">
                    <span className="bg-orange-100 text-orange-800 text-xs font-medium mr-2 px-2.5 py-1 rounded-full dark:bg-green-900 dark:text-green-300">
                      {progress ? "Folyamatban" : "Kész"}
                    </span>
                  </div>
                  <span className="pt-1 flex w-14 bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                    <FaEye size="1.1rem" className="mr-2" />
                    {4}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
