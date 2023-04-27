import React from "react";
import { TiTick } from "react-icons/ti";
import { BsFillEnvelopeFill, BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { MdEventAvailable } from "react-icons/md";

function Contact() {
  return (
    <div>
      <h1 className="text-3xl font-bold pt-8 lg:pt-0 text-light-green">
        Kapcsolat
      </h1>
      <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>

      <div className="mt-4 w-full opacity-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172572.57959586824!2d19.13030300000001!3d47.48121345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741c334d1d4cfc9%3A0x400c4290c1e1160!2sBudapest!5e0!3m2!1shu!2shu!4v1682596496382!5m2!1shu!2shu"
          className="w-full h-60"
          loading="lazy"
        ></iframe>
      </div>
      <div className="flex mb-10 pt-4">
        <div className="w-1/2 pt-4 pr-6 border-r-4 border-light-green-250">
          <div className="w-full">
            <div className="flex mb-6">
              <FiMapPin size="1.5rem" className="h-auto text-light-green" />
              <span className="font-medium text-gray-600 pl-4">
                Budapest, HUN
              </span>
            </div>
          </div>
          <div className="w-full">
            <div className="flex mb-6">
              <BsFillTelephoneFill size="1.5rem" className="h-auto text-light-green" />
              <span className="font-medium text-gray-600 pl-4">
                +36309710372
              </span>
            </div>
          </div>
        </div>

        <div className="w-1/2 pt-4 pl-6">
          <div className="w-full">
            <div className="flex mb-6">
              <BsFillEnvelopeFill size="1.5rem" className="h-auto text-light-green" />
              <span className="font-medium text-gray-600 pl-4">
                bardosrichard99
              </span>
            </div>
          </div>
          <div className="w-full">
            <div className="flex mb-6">
              <MdEventAvailable size="1.5rem" className="h-auto text-light-green" />
              <span className="font-medium text-gray-600 pl-4">
                Munkakereső
              </span>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-3xl font-bold pt-8 lg:pt-0 text-light-green">
        Írj nekem
      </h1>
      <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>

      <div className="mb-10">
        <form className="my-5 flex flex-wrap">
          <div className="w-1/2 pr-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <BsFillPersonFill className="text-light-green"/>
              </div>
              <input
                type="text"
                id="email-address-icon"
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Teljes név"
              />
            </div>
          </div>
          <div className="w-1/2 pl-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <BsFillEnvelopeFill className="text-light-green"/>
              </div>
              <input
                type="text"
                id="email-address-icon"
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email cím"
              />
            </div>
          </div>
          <div className="w-full pt-4">
            <div className="relative">
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Üzeneted"
              ></textarea>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
