import React, { useContext } from "react";
import PageContext from "@/context/PageSwitcherContext";
import { BsPerson } from "react-icons/bs";
import { RiNewspaperLine } from "react-icons/ri";
import { IoMdCodeWorking } from "react-icons/io";
import { MdOutlineAlternateEmail } from "react-icons/md";

function SideBar() {
  const { setPage } = useContext(PageContext);

  const onPageChange = (e) => {
    setPage(e.currentTarget.id);
  };

  return (
    <div className="lg:w-1/12 tel:w-2/12 tel:mt-14 text-white p-2 h-144">
      <div className="flex pt-4 pb-4 flex-col content-start text-center tel:fixed">
        <div
          id="AboutMe.jsx"
          onClick={onPageChange}
          className="rounded-lg bg-white mb-2 py-1 w-full text-black hover:text-light-green transition duration-300 cursor-pointer"
        >
          <BsPerson className="h-auto px-3 pt-1 m-auto" size="3.5rem" />
          <p className="text-sm">About</p>
        </div>
        <div
          id="Resume.jsx"
          onClick={onPageChange}
          className="rounded-lg bg-white mb-2 py-1 w-full text-black hover:text-light-green transition duration-300 cursor-pointer"
        >
          <RiNewspaperLine className="h-auto px-3 pt-1 m-auto" size="3.5rem" />
          <p className="text-sm">Resume</p>
        </div>
        <div
          id="Works.jsx"
          onClick={onPageChange}
          className="rounded-lg bg-white mb-2 py-1 w-full text-black hover:text-light-green transition duration-300 cursor-pointer"
        >
          <IoMdCodeWorking className="h-auto px-3 pt-1 m-auto" size="3.5rem" />
          <p className="text-sm">Works</p>
        </div>
        <div
          id="Contact.jsx"
          onClick={onPageChange}
          className="rounded-lg bg-white mb-2 py-1 w-full text-black hover:text-light-green transition duration-300 cursor-pointer"
        >
          <MdOutlineAlternateEmail className="h-auto px-3 pt-1 m-auto" size="3.5rem" />
          <p className="text-sm">Contact</p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
