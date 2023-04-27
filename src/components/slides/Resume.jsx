import React from "react";
import { FaReact, FaQuoteLeft } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

function Resume() {
  return (
    <div>
      <h1 className="text-3xl font-bold pt-8 lg:pt-0 text-light-green">
        Resume
      </h1>
      <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>

      <div className="flex mb-10">
        <div className="w-1/2 pt-4 pr-6 border-r-4 border-light-green-250">
          <h1 className="text-2xl font-semibold pt-8 lg:pt-0">Tapasztalat</h1>
          <div className="w-full">
            <hr className="my-5 w-1/2 border-light-green opacity-25" />
            <span className="text-sm text-light-green border border-light-green rounded-md px-1">
              2022 - Jelen
            </span>
            <h2 className="font-medium pt-2">Frontend Fejlesztő</h2>
            <h4 className="text-sm text-gray-400">Garand Design</h4>
            <p className="text-sm pt-3">
              I am Richard Bardos, web developer from Hungary,
            </p>
          </div>
          <div className="w-full">
            <hr className="my-5 w-1/2 border-light-green opacity-25" />
            <span className="text-sm text-gray-400 border border-gray-400 rounded-md px-1">
              2021 - 2022
            </span>
            <h2 className="font-medium pt-2">Web Fejlesztő</h2>
            <h4 className="text-sm text-gray-400">
              Online Üzletfejlesztés kft
            </h4>
            <p className="text-sm pt-3">
              I am Richard Bardos, web developer from Hungary,
            </p>
          </div>
        </div>

        <div className="w-1/2 pt-4 pl-6">
          <h1 className="text-2xl font-semibold pt-8 lg:pt-0">Tanulmányok</h1>
          <div className="w-full">
            <hr className="my-5 w-1/2 border-light-green opacity-25" />
            <span className="text-sm text-light-green border border-light-green rounded-md px-1">
              2019 - Jelen
            </span>
            <h2 className="font-medium pt-2">Gazdaságinformatikus BSc.</h2>
            <h4 className="text-sm text-gray-400">
              Corvinus University Budapest
            </h4>
            <p className="text-sm pt-3">
              I am Richard Bardos, web developer from Hungary,
            </p>
          </div>
          <div className="w-full">
            <hr className="my-5 w-1/2 border-light-green opacity-25" />
            <span className="text-sm text-gray-400 border border-gray-400 rounded-md px-1">
              2022
            </span>
            <h2 className="font-medium pt-2">Külföldi részképzés</h2>
            <h4 className="text-sm text-gray-400">
              National University of Singapore
            </h4>
            <p className="text-sm pt-3">
              I am Richard Bardos, web developer from Hungary,
            </p>
          </div>
        </div>
      </div>

      <h1 className="text-3xl font-bold pt-8 lg:pt-0 text-light-green">
        Képességek
      </h1>
      <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>

      <div className="flex mb-10">
        <div className="w-1/2 pt-4 pr-6 border-r-4 border-light-green-250">
          <h1 className="text-2xl font-semibold pt-8 lg:pt-0">Fejlesztés</h1>
          <div className="w-full">
            <hr className="my-5 w-1/2 border-light-green opacity-25" />
            <div className="mb-1 text-base font-medium">HTML & CSS</div>
            <div class="w-full bg-gray-200 rounded-full h-1.5 mb-4">
              <div class="w-full bg-light-green h-1.5 rounded-full"></div>
            </div>
            <div className="mb-1 text-base font-medium">C#</div>
            <div class="w-full bg-gray-200 rounded-full h-1.5 mb-4">
              <div class="w-7/12 bg-light-green h-1.5 rounded-full"></div>
            </div>
            <div className="mb-1 text-base font-medium">
              JavaScript & Typescript
            </div>
            <div class="w-full bg-gray-200 rounded-full h-1.5 mb-4">
              <div class="w-10/12 bg-light-green h-1.5 rounded-full"></div>
            </div>
            <div className="mb-1 text-base font-medium">React.js & Next.js</div>
            <div class="w-full bg-gray-200 rounded-full h-1.5 mb-4">
              <div class="w-5/12 bg-light-green h-1.5 rounded-full"></div>
            </div>
            <div className="mb-1 text-base font-medium">Python & R</div>
            <div class="w-full bg-gray-200 rounded-full h-1.5 mb-4">
              <div class="w-6/12 bg-light-green h-1.5 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="w-1/2 pt-4 pl-6">
          <h1 className="text-2xl font-semibold pt-8 lg:pt-0">Platformok</h1>
          <div className="w-full">
            <hr className="my-5 w-1/2 border-light-green opacity-25" />
            <div className="flex mb-2">
              <TiTick size="1.5rem" className="h-auto text-light-green" />
              <span className="font-medium text-gray-600 pl-4">
                Wordpress, WooCommerce
              </span>
            </div>
            <div className="flex mb-2">
              <TiTick size="1.5rem" className="h-auto text-light-green" />
              <span className="font-medium text-gray-600 pl-4">
                Visual Studio Code
              </span>
            </div>
            <div className="flex mb-2">
              <TiTick size="1.5rem" className="h-auto text-light-green" />
              <span className="font-medium text-gray-600 pl-4">
                GitLab, GitHub, BitBucket
              </span>
            </div>
            <div className="flex mb-2">
              <TiTick size="1.5rem" className="h-auto text-light-green" />
              <span className="font-medium text-gray-600 pl-4">
                Jira, YouTrack
              </span>
            </div>
            <div className="flex mb-2">
              <TiTick size="1.5rem" className="h-auto text-light-green" />
              <span className="font-medium text-gray-600 pl-4">AWS, Azure</span>
            </div>
            <div className="flex mb-2">
              <TiTick size="1.5rem" className="h-auto text-light-green" />
              <span className="font-medium text-gray-600 pl-4">
                Notion, Slack, Hubspot
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mb-10">
        <div className="w-full">
          <h1 className="text-2xl font-semibold lg:pt-0">Nyelvtudás</h1>
          <div className="w-full">
            <hr className="my-5 w-1/2 border-light-green opacity-25" />
            <div className="mb-1 text-base font-medium">Magyar</div>
            <div class="w-full bg-gray-200 rounded-full h-1.5 mb-4">
              <div class="w-full bg-light-green h-1.5 rounded-full"></div>
            </div>
            <div className="mb-1 text-base font-medium">Angol</div>
            <div class="w-full bg-gray-200 rounded-full h-1.5 mb-4">
              <div class="w-8/12 bg-light-green h-1.5 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
