import React from "react";
import {
  BsFillEnvelopeFill,
  BsFillPersonFill,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { MdEventAvailable } from "react-icons/md";
import { useTranslations } from "next-intl";

function Contact() {
  const lang = useTranslations("Contact");

  const handleSubmit = async (event) => {
    event.preventDefault()

    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    }
 
    alert(`Your full name: ${data.name}\nEmail address: ${data.email}\nYour message: ${data.message}`)
  }

  return (
    <div>
      <h1 className="text-3xl font-bold pt-8 lg:pt-0 text-light-green">
        {lang("title")}
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
            <a href="https://goo.gl/maps/Ffom7Lp8sms3vUpJ7">
              <div className="flex mb-6 tel:flex-wrap">
                <FiMapPin
                  size="1.5rem"
                  className="tel:w-full lg:h-auto text-light-green tel:mb-3"
                />
                <span className="tel:w-full font-medium tel:text-sm text-gray-600 lg:pl-4 hover:text-light-green dark:text-white dark:hover:text-light-green">
                  Budapest, HUN
                </span>
              </div>
            </a>
          </div>
          <div className="w-full">
            <a href="tel:+36309710372">
              <div className="flex mb-6 tel:flex-wrap">
                <BsFillTelephoneFill
                  size="1.5rem"
                  className="tel:w-full lg:h-auto text-light-green tel:mb-3"
                />
                <span className=" tel:w-full font-medium tel:text-sm text-gray-600 lg:pl-4 hover:text-light-green dark:text-white dark:hover:text-light-green">
                  +36309710372
                </span>
              </div>
            </a>
          </div>
        </div>

        <div className="w-1/2 pt-4 pl-6">
          <div className="w-full">
            <a href="mailto:bardosrichard99@gmail.com">
              <div className="flex mb-6 tel:flex-wrap">
                <BsFillEnvelopeFill
                  size="1.5rem"
                  className="tel:w-full lg:h-auto text-light-green tel:mb-3"
                />
                <span className="tel:w-full font-medium tel:text-sm text-gray-600 lg:pl-4 hover:text-light-green dark:text-white dark:hover:text-light-green">
                  bardosrichard99
                </span>
              </div>
            </a>
          </div>
          <div className="w-full">
            <div className="flex tel:flex-wrap mb-6">
              <MdEventAvailable
                size="1.5rem"
                className="tel:w-full lg:h-auto text-light-green tel:mb-3"
              />
              <span className="tel:w-full font-medium tel:text-sm text-gray-600 lg:pl-4 dark:text-white">
                {lang("status")}
              </span>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-3xl font-bold pt-8 lg:pt-0 text-light-green">
        {lang("writeme")}
      </h1>
      <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>

      <div className="lg:mb-10">
        <form
          className="my-5 flex flex-wrap"
          action="/api/form"
          method="post"
          onSubmit={handleSubmit}
        >
          <div className="lg:w-1/2 tel:w-full lg:pr-2 tel:mb-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <BsFillPersonFill className="text-light-green" />
              </div>
              <input
                type="text"
                id="name" name="name"
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={lang("ph_name")}
              />
            </div>
          </div>
          <div className="lg:w-1/2 tel:w-full lg:pl-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <BsFillEnvelopeFill className="text-light-green" />
              </div>
              <input
                type="email"
                id="email" name="email"
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={lang("ph_email")}
              />
            </div>
          </div>
          <div className="w-full pt-4">
            <div className="relative">
              <textarea
                id="message" name="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={lang("ph_message")}
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex p-0.5 my-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
          >
            {" "}
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-700 rounded-md group-hover:bg-opacity-0">
              {lang("submit")}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

// Language file search
export async function getStaticProps(context) {
  return {
    props: {
      messages: (await import(`../../lang/${context.locale}.json`)).default,
    },
  };
}
