import React, { useContext } from "react";
import AboutMe from "./slides/AboutMe";
import PageContext from "@/context/PageSwitcherContext";
import Resume from "./slides/Resume";
import Works from "./slides/Works";
import Contact from "./slides/Contact";

function MainComponentDetail() {
  const {currentPage} = useContext(PageContext)

  return (
    <div
      id="profile"
      className="h-128 tel:mt-14 lg:overflow-y-scroll tel:w-10/12 lg:w-7/12 rounded-lg lg:rounded-r-lg lg:rounded-l-none shadow-2xl bg-white opacity-80 mx-6 lg:mx-0"
    >
      <div className="p-4 md:p-12 text-center lg:text-left">
        <div
          className="block lg:hidden rounded-full shadow-xl mx-auto -mt-20 h-48 w-48 bg-cover bg-center"
          style={{
            backgroundImage: `url('images/DSC_5579_phone.jpg')`,
          }}
        ></div>

        {currentPage.currentPage === 'AboutMe.jsx' && <AboutMe/>}
        {currentPage.currentPage === 'Resume.jsx' && <Resume/>}
        {currentPage.currentPage === 'Works.jsx' && <Works/>}
        {currentPage.currentPage === 'Contact.jsx' && <Contact/>}
      </div>
    </div>
  );
}

export default MainComponentDetail;
