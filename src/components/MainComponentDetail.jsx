import React from "react";
import AboutMe from "./slides/AboutMe";

function MainComponentDetail() {
  return (
    <div
      id="profile"
      className="h-128 overflow-y-scroll w-full lg:w-3/5 rounded-lg lg:rounded-r-lg lg:rounded-l-none shadow-2xl bg-white opacity-80 mx-6 lg:mx-0"
    >
      <div className="p-4 md:p-12 text-center lg:text-left">
        <div
          className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
          style={{
            backgroundImage: `url('images/DSC_5579_phone.jpg')`,
          }}
        ></div>

        <AboutMe/>
      </div>
    </div>
  );
}

export default MainComponentDetail;
