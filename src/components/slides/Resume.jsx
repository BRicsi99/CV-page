import React from "react";
import { TiTick } from "react-icons/ti";
import { useTranslations } from "next-intl";

function Resume() {
  const lang = useTranslations("Resume");

  return (
    <div>
      <h1 className="text-3xl font-bold pt-8 lg:pt-0 text-light-green">
        {lang("title")}
      </h1>
      <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>

      <div className="flex mb-10">
        <div className="w-1/2 pt-4 lg:pr-6 tel:pr-2 border-r-4 border-light-green-250">
          <h1 className="lg:text-2xl tel:text-xl font-semibold pt-8 lg:pt-0">
            {lang("experience_title")}
          </h1>
          <div className="w-full">
            <hr className="my-5 w-1/2 border-light-green opacity-25" />
            <span className="text-sm text-light-green border border-light-green rounded-md px-1">
              {lang("exp1_time")}
            </span>
            <h2 className="font-medium pt-2">{lang("exp1_ttl")}</h2>
            <h4 className="text-sm text-gray-400">{lang("exp1_place")}</h4>
            <p className="text-sm pt-3">{lang("exp1_dsc")}</p>
          </div>
          <div className="w-full">
            <hr className="my-5 w-1/2 border-light-green opacity-25" />
            <span className="text-sm text-gray-400 border border-gray-400 rounded-md px-1">
              {lang("exp2_time")}
            </span>
            <h2 className="font-medium pt-2">{lang("exp2_ttl")}</h2>
            <h4 className="text-sm text-gray-400">{lang("exp2_place")}</h4>
            <p className="text-sm pt-3">{lang("exp2_dsc")}</p>
          </div>
        </div>

        <div className="w-1/2 pt-4 lg:pl-6 tel:pl-2">
          <h1 className="lg:text-2xl tel:text-xl font-semibold pt-8 lg:pt-0">
            {lang("education_title")}
          </h1>
          <div className="w-full">
            <hr className="my-5 w-1/2 border-light-green opacity-25" />
            <span className="text-sm text-light-green border border-light-green rounded-md px-1">
              {lang("edu1_time")}
            </span>
            <h2 className="font-medium pt-2">{lang("edu1_ttl")}</h2>
            <h4 className="text-sm text-gray-400">{lang("edu1_place")}</h4>
            <p className="text-sm pt-3">{lang("edu1_dsc")}</p>
          </div>
          <div className="w-full">
            <hr className="my-5 w-1/2 border-light-green opacity-25" />
            <span className="text-sm text-gray-400 border border-gray-400 rounded-md px-1">
              {lang("edu2_time")}
            </span>
            <h2 className="font-medium pt-2">{lang("edu2_ttl")}</h2>
            <h4 className="text-sm text-gray-400">{lang("edu2_place")}</h4>
            <p className="text-sm pt-3">{lang("edu2_dsc")}</p>
          </div>
        </div>
      </div>

      <h1 className="text-3xl font-bold pt-8 lg:pt-0 text-light-green">
        {lang("skills_title")}
      </h1>
      <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>

      <div className="flex mb-10">
        <div className="w-1/2 pt-4 lg:pr-6 tel:pr-2 border-r-4 border-light-green-250">
          <h1 className="lg:text-2xl tel:text-xl font-semibold pt-8 lg:pt-0">
            {lang("dev_title")}
          </h1>
          <div className="w-full">
            <hr className="my-5 w-1/2 border-light-green opacity-25" />
            <div className="mb-1 text-base font-medium">HTML & CSS</div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
              <div className="w-full bg-light-green h-1.5 rounded-full"></div>
            </div>
            <div className="mb-1 text-base font-medium">C#</div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
              <div className="w-7/12 bg-light-green h-1.5 rounded-full"></div>
            </div>
            <div className="mb-1 text-base font-medium">
              JavaScript & Typescript
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
              <div className="w-10/12 bg-light-green h-1.5 rounded-full"></div>
            </div>
            <div className="mb-1 text-base font-medium">React.js & Next.js</div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
              <div className="w-5/12 bg-light-green h-1.5 rounded-full"></div>
            </div>
            <div className="mb-1 text-base font-medium">Python & R</div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
              <div className="w-6/12 bg-light-green h-1.5 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="w-1/2 pt-4 lg:pl-6 tel:pl-2">
          <h1 className="lg:text-2xl tel:text-xl font-semibold pt-8 lg:pt-0">
            {lang("platforms_title")}
          </h1>
          <div className="w-full tel:text-center">
            <hr className="my-5 w-1/2 border-light-green opacity-25" />
            <div className="flex mb-2 tel:justify-center">
              <TiTick
                size="1.5rem"
                className="tel:hidden h-auto text-light-green"
              />
              <span className="font-medium tel:text-sm text-gray-600 lg:pl-4">
                Wordpress, WooCommerce
              </span>
            </div>
            <div className="flex mb-2 tel:justify-center">
              <TiTick
                size="1.5rem"
                className="tel:hidden h-auto text-light-green"
              />
              <span className="font-medium tel:text-sm text-gray-600 lg:pl-4">
                Visual Studio Code
              </span>
            </div>
            <div className="flex mb-2 tel:justify-center">
              <TiTick
                size="1.5rem"
                className="tel:hidden h-auto text-light-green"
              />
              <span className="font-medium tel:text-sm text-gray-600 lg:pl-4">
                GitLab, GitHub, BitBucket
              </span>
            </div>
            <div className="flex mb-2 tel:justify-center">
              <TiTick
                size="1.5rem"
                className="tel:hidden h-auto text-light-green"
              />
              <span className="font-medium tel:text-sm text-gray-600 lg:pl-4">
                Jira, YouTrack
              </span>
            </div>
            <div className="flex mb-2 tel:justify-center">
              <TiTick
                size="1.5rem"
                className="tel:hidden h-auto text-light-green"
              />
              <span className="font-medium tel:text-sm text-gray-600 lg:pl-4">
                AWS, Azure
              </span>
            </div>
            <div className="flex mb-2 tel:justify-center">
              <TiTick
                size="1.5rem"
                className="tel:hidden h-auto text-light-green"
              />
              <span className="font-medium tel:text-sm text-gray-600 lg:pl-4">
                Notion, Slack, Hubspot
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mb-10">
        <div className="w-full">
          <h1 className="text-2xl font-semibold lg:pt-0">{lang("language_title")}</h1>
          <div className="w-full">
            <hr className="my-5 w-1/2 border-light-green opacity-25" />
            <div className="mb-1 text-base font-medium">{lang("lang1")}</div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
              <div className="w-full bg-light-green h-1.5 rounded-full"></div>
            </div>
            <div className="mb-1 text-base font-medium">{lang("lang2")}</div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
              <div className="w-8/12 bg-light-green h-1.5 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;

// Language file search
export async function getStaticProps(context) {
  return {
    props: {
      messages: (await import(`../../lang/${context.locale}.json`)).default,
    },
  };
}
