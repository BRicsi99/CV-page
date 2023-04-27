import React, { useContext } from "react";
import { FaReact } from "react-icons/fa";
import PopUpContext from "../../context/PopUpContext";

const works = [
  {
    id: 1,
    name: "House Marketplace",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
    progress: true,
    url: "https://react-house-marketplace-six.vercel.app/",
    gitlab: "https://gitlab.com/bardosrichard99/react-house-marketplace",
  },
  {
    id: 2,
    name: "Github Finder",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
    progress: false,
    url: "https://react-github-finder-alpha-murex.vercel.app/",
    gitlab: "https://gitlab.com/bardosrichard99/react-github-finder",
  },
  {
    id: 3,
    name: "Feedback UI",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
    progress: false,
    url: "https://react-feedback-ui-pi.vercel.app/",
    gitlab: "https://gitlab.com/bardosrichard99/react-feedback-ui",
  },
  {
    id: 4,
    name: "Food Order Page 2.0",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
    progress: false,
    url: "https://react-food-order-page-2-0.vercel.app/",
    gitlab: "https://gitlab.com/bardosrichard99/react-food-order-page-2.0",
  },
  {
    id: 5,
    name: "Redux authentication",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
    progress: false,
    url: "https://react-redux-authentication.vercel.app/",
    gitlab: "https://gitlab.com/bardosrichard99/react-redux-authentication",
  },
  {
    id: 6,
    name: "Typescript Todo",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
    progress: false,
    url: "https://react-typescript-todo-eight.vercel.app/",
    gitlab: "https://gitlab.com/bardosrichard99/react-typescript-todo",
  },
];

function Works() {
  const { setVisible } = useContext(PopUpContext);

  const onSetVisible = (e) => {
    const item = works.find(
      (item) => item.id.toString() === e.currentTarget.id
    );
    if (window.event.ctrlKey) {
      console.log("ctrl was held down during the click");
    } else {
      setVisible(item.image, item.name);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold pt-8 lg:pt-0 text-light-green">
        Referencia
      </h1>
      <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-6">
        <div className="grid gap-4">
          {works.slice(0, Math.ceil(works.length / 2)).map((item) => (
            <div key={item.id}>
              <img
                id={item.id}
                className="h-auto max-w-full rounded-lg"
                src={item.image}
                alt={item.name}
                onClick={onSetVisible}
              />
            </div>
          ))}
        </div>
        <div className="grid gap-4">
          {works.slice(Math.ceil(works.length / 2)).map((item) => (
            <div key={item.id}>
              <img
                id={item.id}
                className="h-auto max-w-full rounded-lg"
                src={item.image}
                alt={item.name}
                onClick={onSetVisible}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="my-10">
        <button
          type="button"
          className="relative inline-flex items-center text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
            alt=""
          />
          <span className="sr-only">Notifications</span>
          <div className="absolute inline-flex items-center justify-center w-12 h-12 text-xs font-bold text-white bg-light-green border-2 border-white rounded-full -top-3 -right-3 dark:border-gray-900">
            <FaReact size="1.5rem" />
          </div>
        </button>
      </div>
    </div>
  );
}

export default Works;
