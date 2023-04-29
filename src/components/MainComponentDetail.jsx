import React, { useContext } from "react";
import AboutMe from "./slides/AboutMe";
import PageContext from "@/context/PageSwitcherContext";
import Resume from "./slides/Resume";
import Works from "./slides/Works";
import Contact from "./slides/Contact";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillGitlab } from "react-icons/ai";

function MainComponentDetail() {
  const { currentPage, setPage } = useContext(PageContext);

  const onPageChange = (e) => {
    setPage(e.currentTarget.id);
  };

  return (
    <div
      id="profile"
      className="lg:h-128 tel:mt-20 tel:mb-4 lg:overflow-y-scroll tel:w-9/12 lg:w-7/12 rounded-lg lg:rounded-r-lg lg:rounded-l-none shadow-2xl bg-white dark:bg-gray-800 opacity-80 lg:mx-0"
    >
      <div className="p-4 lg:p-12 tel:p-4 tel:pb-20 text-center lg:text-left">
        <div className="lg:hidden">
          <div
            className="block rounded-full shadow-xl mx-auto -mt-20 h-48 w-48 bg-cover bg-center"
            style={{
              backgroundImage: `url('images/DSC_5579_phone.jpg')`,
            }}
          ></div>
          <h1 className="text-3xl pt-4 text-center fade-in-out">
            Bárdos Richárd
          </h1>
          <p className="text-1xl my-3 text-center text-light-green font-medium">
            Frontend Fejlesztő
          </p>
          <div className="mt-4 w-4/5 mx-auto flex flex-wrap items-center justify-center gap-7">
            <a
              className="link"
              href="https://github.com/BRicsi99"
              target="_blank"
            >
              <FaGithub
                size="2rem"
                className="h-6 fill-current text-gray-600 hover:text-green-700"
              />
            </a>
            <a
              className="link"
              href="https://gitlab.com/bardosrichard99"
              target="_blank"
            >
              <AiFillGitlab
                size="2rem"
                className="h-6 fill-current text-gray-600 hover:text-green-700"
              />
            </a>
            <a
              className="link"
              href="https://www.linkedin.com/in/richard-bardos/"
              target="_blank"
            >
              <FaLinkedin
                size="2rem"
                className="h-6 fill-current text-gray-600 hover:text-green-700"
              />
            </a>
          </div>

          <div className="mt-4 lg:pb-0 w-full mx-auto flex flex-wrap items-center justify-center gap-7">
            <button
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/files/RichardBardos_CV_en_202303.pdf";
              }}
              className="relative inline-flex p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                CV Letöltése
              </span>
            </button>
            <button
              id="Contact.jsx"
              onClick={onPageChange}
              className="relative inline-flex p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Kapcsolat
              </span>
            </button>
          </div>
        </div>

        {currentPage.currentPage === "AboutMe.jsx" && <AboutMe />}
        {currentPage.currentPage === "Resume.jsx" && <Resume />}
        {currentPage.currentPage === "Works.jsx" && <Works />}
        {currentPage.currentPage === "Contact.jsx" && <Contact />}
      </div>
    </div>
  );
}

export default MainComponentDetail;
