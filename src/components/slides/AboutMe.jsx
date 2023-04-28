import React from "react";
import { FaReact, FaQuoteLeft } from "react-icons/fa";

function AboutMe() {
  return (
    <div>
      <h1 className="text-3xl font-bold pt-8 lg:pt-0 text-light-green">Rólam</h1>
      <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
      <div className="flex tel:flex-wrap gap-x-10 pt-4 mb-10">
        <div className="lg:w-1/2 tel:w-full tel:mb-4">
          <p className="text-sm flex items-center justify-center lg:justify-start text-justify">
            I am Richard Bardos, web developer from Hungary, Budapest. I have
            rich experience in web site design and building and customization,
            also I am good at wordpress. I love to talk with you about our
            unique.
          </p>
        </div>
        <div className="lg:w-1/2 tel:w-full flex flex-wrap">
          <p className="w-1/2 text-center lg:h-0 font-bold">Kor</p>
          <p className="w-1/2 text-center lg:h-0">23</p>

          <p className="w-1/2 text-center lg:h-0 font-bold">Származás</p>
          <p className="w-1/2 text-center lg:h-0">Magyar</p>

          <p className="w-1/2 text-center lg:h-0 font-bold">Állapot</p>
          <p className="w-1/2 text-center lg:h-0">Elérhető</p>

          <p className="w-1/2 text-center h-0 font-bold">Lakhely</p>
          <p className="w-1/2 text-center h-0">Budapest, HU</p>
        </div>
      </div>

      <h1 className="text-2xl font-bold pt-8 lg:pt-0">Szolgáltatások</h1>
      <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>

      <div className="flex pt-4 flex-wrap flex-row">
        <div className="w-1/2 text-center lg:px-3 pb-5">
          <div className="rounded-full bg-light-green p-3 w-14 m-auto">
            <FaReact size="2rem" className="h-auto text-white" />
          </div>
          <h3 className="text-lg font-semibold">React.js & Next.js</h3>
          <p>Egyedi weboldalak fejlesztése</p>
        </div>

        <div className="w-1/2 text-center lg:px-3 pb-5">
          <div className="rounded-full bg-light-green p-3 w-14 m-auto">
            <FaReact size="2rem" className="h-auto text-white" />
          </div>
          <h3 className="text-lg font-semibold">React.js & Next.js</h3>
          <p>Egyedi weboldalak fejlesztése</p>
        </div>

        <div className="w-1/2 text-center lg:px-3 pb-5">
          <div className="rounded-full bg-light-green p-3 w-14 m-auto">
            <FaReact size="2rem" className="h-auto text-white" />
          </div>
          <h3 className="text-lg font-semibold">React.js & Next.js</h3>
          <p>Egyedi weboldalak fejlesztése</p>
        </div>

        <div className="w-1/2 text-center lg:px-3 pb-5">
          <div className="rounded-full bg-light-green p-3 w-14 m-auto">
            <FaReact size="2rem" className="h-auto text-white" />
          </div>
          <h3 className="text-lg font-semibold">React.js & Next.js</h3>
          <p>Egyedi weboldalak fejlesztése</p>
        </div>
      </div>

      <h1 className="text-2xl font-bold pt-8 lg:pt-0">Hobbik</h1>
      <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>

      <div className="flex pt-4 pb-4 flex-wrap flex-row tel:gap-y-4">
        <div className="w-1/4 rounded-lg bg-light-green p-3 w-24 m-auto">
          <img
            src="images/wired-lineal-1764-pushups.gif"
            className="h-auto"
            size="2rem"
          />
        </div>
        <div className="w-1/4 rounded-lg bg-light-green p-3 w-24 m-auto">
          <img
            src="images/music-album.gif"
            className="h-auto"
            size="2rem"
          />
        </div>
        <div className="w-1/4 rounded-lg bg-light-green p-3 w-24 m-auto">
          <img
            src="images/palmtree.gif"
            className="h-auto"
            size="2rem"
          />
        </div>
        <div className="w-1/4 rounded-lg bg-light-green p-3 w-24 m-auto">
          <img
            src="images/consultation.gif"
            className="h-auto"
            size="2rem"
          />
        </div>
      </div>

      <h1 className="text-2xl font-bold pt-8 lg:pt-0">Kedvenc idézet</h1>
      <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>

      <figure className="max-w-screen-md mx-auto text-center">
        <FaQuoteLeft className="w-12 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600 pt-3" />
        <blockquote>
          <p className="text-1xl italic font-medium text-gray-900 dark:text-white">
            "There are 3 ways to make a living in this business: <br /> Be
            first, Be smarter, Or cheat.
            <br />
            But, I don't cheat!"
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center mt-6 space-x-3">
          <img
          className="w-6 h-6 rounded-full"
            src="images/JeremyIrons.jpg"
            alt="Jeremy Irons picture"
          />
          <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <cite className="pr-3 font-medium text-gray-900 dark:text-white">
              Jeremy Irons
            </cite>
            <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
              Margin Call
            </cite>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

export default AboutMe;
