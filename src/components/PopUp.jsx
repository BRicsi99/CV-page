import React, { useContext } from "react";
import PopUpContext from "../context/PopUpContext";
import { RxCross2 } from "react-icons/rx";
import { FaEye, FaLink } from "react-icons/fa";
import { AiFillGitlab } from "react-icons/ai";
import { useTranslations } from "next-intl";

function PopUp() {
  const { src, title, progress, url, gitlab, description, setHidden } =
    useContext(PopUpContext);
  const lang = useTranslations("PopUp");

  return (
    <div
      id="modal"
      className="fixed top-0 left-0 z-80 w-screen h-screen bg-black/70 flex justify-center items-center"
    >
      <div className="tel:flex tel:flex-wrap relative lg:w-5/6 tel:w-11/12 max-h-8/10 lg:max-w-5/6 tel:max-w-11/12 bg-white rounded-lg shadow dark:bg-gray-700">
        <div className="flex tel:w-full items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {lang("title")}
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

        <div className="flex tel:flex-wrap tel:w-full lg:p-6 tel:p-3">
          <div className="lg:w-1/2 tel:w-full lg:pr-2 tel:px-10 tel:pb-3 lg:h-144">
            <a href={url} target="_blank">
              <img
                id="modal-img"
                src={src}
                className="object-cover object-top lg:h-full w-full rounded-md border shadow dark:border-black"
              />
            </a>
          </div>

          <div className="lg:w-1/2 tel:w-full lg:pl-2">
            <div className="mb-2 h-full lg:p-6 tel:p-3 rounded-md card bg-white dark:bg-gray-700 border border-gray-200 hover:bg-light-green-250 shadow text-black dark:border-black">
              <div>
                <h3 className="lg:mb-2 lg:text-2xl tel:text-xl font-semibold dark:text-white">
                  {title}
                </h3>
                <div className="mx-auto lg:mx-0 w-4/5 my-5 border-b-2 border-green-500 opacity-25"></div>
                <p className="mb-3 lg:text-lg tel:text-medium text-gray-400">
                  {description}
                </p>
                <div className="tel:flex tel:flex-wrap">
                  <div className="tel:w-full flex gap-5 my-3 tel:justify-center">
                    <a
                      className="link cursor-pointer"
                      href={url}
                      target="_blank"
                    >
                      <FaLink
                        size="1.7rem"
                        className="h-10 fill-current text-gray-600 hover:text-green-700 dark:text-white dark:hover:text-green-700"
                      />
                    </a>
                    <a
                      className="link cursor-pointer"
                      href={gitlab}
                      target="_blank"
                    >
                      <AiFillGitlab
                        size="2rem"
                        className="h-10 fill-current text-gray-600 hover:text-green-700 dark:text-white dark:hover:text-green-700"
                      />
                    </a>
                  </div>

                  <div className="tel:w-full flex tel:flex-wrap tel:content-center">
                    <div className="lg:mr-3 tel:w-1/2 tel:text-center">
                      <span className="bg-orange-100 text-orange-800 text-xs font-medium lg:mr-2 px-2.5 py-1 rounded-full dark:bg-orange-800 dark:text-white">
                        {progress ? lang("ongoing") : lang("done")}
                      </span>
                    </div>
                    <div className="tel:w-1/2 tel:m-auto tel:content-center">
                      <span className="pt-1 flex w-14 bg-blue-100 text-blue-800 text-xs font-medium lg:mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-white tel:mx-auto">
                        <FaEye size="1.1rem" className="mr-2 " />
                        {4}
                      </span>
                    </div>
                  </div>
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

// Language file search
export async function getStaticProps(context) {
  return {
    props: {
      messages: (await import(`../lang/${context.locale}.json`)).default,
    },
  };
}