import React, { useContext } from "react";
import PopUpContext from "../context/PopUpContext";
import { RxCross2 } from "react-icons/rx";
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";

function PopUp() {
  const { src, title, progress, url, gitlab, setHidden } =
    useContext(PopUpContext);

  return (
    <div
      id="modal"
      className="fixed top-0 left-0 z-80 w-screen h-screen bg-black/70 flex justify-center items-center"
    >
      <div className="relative lg:w-3/6 max-h-5/6 max-w-5/6 bg-white rounded-lg shadow dark:bg-gray-700">
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
          <div className="w-1/2 pr-2">
            <img id="modal-img" src={src} className="w-full object-cover rounded-md" />
          </div>
          <div className="w-1/2 pl-2">
            <div className="mb-2 rounded-md card bg-gray-800 hover:bg-gray-900 text-white">
              <div className="card-body">
                <h3 className="mb-2 text-xl font-semibold">
                  <a href={url}>
                    <FaLink className="inline mr-1" /> {title}
                  </a>
                </h3>
                <p className="mb-3">{"description"}</p>
                <div>
                  <div className="mr-2 badge badge-info badge-lg">
                    <FaEye className="mr-2" /> {4}
                  </div>
                  <div className="mr-2 badge badge-success badge-lg">
                    <FaStar className="mr-2" /> {5}
                  </div>
                  <div className="mr-2 badge badge-error badge-lg">
                    <FaInfo className="mr-2" /> {4}
                  </div>
                  <div className="mr-2 badge badge-warning badge-lg">
                    <FaUtensils className="mr-2" /> {3}
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
