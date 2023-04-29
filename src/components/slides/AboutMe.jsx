import React from "react";
import { FaReact, FaQuoteLeft, FaWordpressSimple } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useTranslations } from "next-intl";

function AboutMe() {
  const lang = useTranslations("AboutMe");

  return (
    <div>
      <h1 className="text-3xl font-bold pt-8 lg:pt-0 text-light-green">
        {lang("title")}
      </h1>
      <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
      <div className="flex tel:flex-wrap pt-4 mb-10">
        <div className="lg:w-1/2 tel:w-full tel:mb-4 tel:px-2">
          <p className="text-sm flex items-center justify-center lg:justify-start tel:text-justify">
            {lang("about-text")}
          </p>
        </div>
        <div className="lg:w-1/2 tel:w-full flex flex-wrap">
          <p className="w-1/2 text-center lg:h-0 font-bold">{lang("age")}</p>
          <p className="w-1/2 text-center lg:h-0">23</p>

          <p className="w-1/2 text-center lg:h-0 font-bold">
            {lang("nationality")}
          </p>
          <p className="w-1/2 text-center lg:h-0">{lang("nation")}</p>

          <p className="w-1/2 text-center lg:h-0 font-bold">{lang("status")}</p>
          <p className="w-1/2 text-center lg:h-0">{lang("status_ans")}</p>

          <p className="w-1/2 text-center h-0 font-bold">{lang("location")}</p>
          <p className="w-1/2 text-center h-0">Budapest, HU</p>
        </div>
      </div>

      <h1 className="text-2xl font-bold pt-8 lg:pt-0">
        {lang("service_title")}
      </h1>
      <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>

      <div className="flex pt-4 flex-wrap flex-row">
        <div className="w-1/2 text-center lg:px-3 pb-5">
          <div className="rounded-full bg-light-green p-3 w-14 m-auto">
            <FaReact size="2rem" className="h-auto text-white" />
          </div>
          <h3 className="lg:text-lg font-semibold">{lang("service1_ttl")}</h3>
          <p className="tel:text-sm">{lang("service1_dsc")}</p>
        </div>

        <div className="w-1/2 text-center lg:px-3 pb-5">
          <div className="rounded-full bg-light-green p-3 w-14 m-auto">
            <CgWebsite size="2rem" className="h-auto text-white" />
          </div>
          <h3 className="lg:text-lg font-semibold">{lang("service2_ttl")}</h3>
          <p className="tel:text-sm">{lang("service2_dsc")}</p>
        </div>

        <div className="w-1/2 text-center lg:px-3 pb-5">
          <div className="rounded-full bg-light-green p-3 w-14 m-auto">
            <FaWordpressSimple size="2rem" className="h-auto text-white" />
          </div>
          <h3 className="lg:text-lg font-semibold">{lang("service3_ttl")}</h3>
          <p className="tel:text-sm">{lang("service3_dsc")}</p>
        </div>

        <div className="w-1/2 text-center lg:px-3 pb-5">
          <div className="rounded-full bg-light-green p-3 w-14 m-auto">
            <AiOutlineShoppingCart size="2rem" className="h-auto text-white" />
          </div>
          <h3 className="lg:text-lg font-semibold">{lang("service4_ttl")}</h3>
          <p className="tel:text-sm">{lang("service4_dsc")}</p>
        </div>
      </div>

      <h1 className="text-2xl font-bold pt-8 lg:pt-0">{lang("hobbies")}</h1>
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
          <img src="images/music-album.gif" className="h-auto" size="2rem" />
        </div>
        <div className="w-1/4 rounded-lg bg-light-green p-3 w-24 m-auto">
          <img src="images/palmtree.gif" className="h-auto" size="2rem" />
        </div>
        <div className="w-1/4 rounded-lg bg-light-green p-3 w-24 m-auto">
          <img src="images/consultation.gif" className="h-auto" size="2rem" />
        </div>
      </div>

      <h1 className="text-2xl font-bold pt-8 lg:pt-0">{lang("quote_title")}</h1>
      <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>

      <figure className="max-w-screen-md mx-auto text-center">
        <FaQuoteLeft className="w-12 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600 pt-3" />
        <blockquote>
          <p className="text-1xl italic font-medium text-gray-900 dark:text-white">
            "{lang("quote")}"
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center mt-6 space-x-3">
          <img
            className="w-6 h-6 rounded-full"
            src="images/JeremyIrons.jpg"
            alt={lang("quote_alt")}
          />
          <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <cite className="pr-3 font-medium text-gray-900 dark:text-white">
              {lang("quote_name")}
            </cite>
            <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
              {lang("quote_source")}
            </cite>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

export default AboutMe;

// Language file search
export async function getStaticProps(context) {
  return {
    props: {
      messages: (await import(`../../lang/${context.locale}.json`)).default,
    },
  };
}
