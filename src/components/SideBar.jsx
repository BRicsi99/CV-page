import React, { useContext } from "react";
import PageContext from "@/context/PageSwitcherContext";
import { BsPerson } from "react-icons/bs";
import { RiNewspaperLine } from "react-icons/ri";
import { IoMdCodeWorking } from "react-icons/io";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

function SideBar() {
  const { setPage } = useContext(PageContext);
  const lang = useTranslations("SideBar");
  const { locales, locale } = useRouter();

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const onPageChange = (e) => {
    setPage(e.currentTarget.id);
  };

  return (
    <div className="lg:w-1/12 tel:w-2/12 tel:mt-16 text-white lg:p-2 h-144">
      <div className="flex pt-4 pb-4 flex-col content-start text-center tel:fixed">
        <div className="relative h-12 w-18 p-4 lg:hidden">
          <button
            onClick={() =>
              currentTheme == "dark" ? setTheme("light") : setTheme("dark")
            }
            className="js-change-theme focus:outline-none"
          >
            🌙
          </button>
        </div>
        <div className="relative h-12 w-18 mx-auto pt-3 lg:hidden">
          {[...locales]
            .filter((item) => item !== locale)
            .map((locale) => (
              <Link key={locale} href="/" locale={locale}>
                <img
                  src={
                    locale === "hu"
                      ? "/images/hungary.png"
                      : "/images/united-kingdom.png"
                  }
                  className="h-5"
                />
              </Link>
            ))}
        </div>
        <div
          id="AboutMe.jsx"
          onClick={onPageChange}
          className="rounded-lg bg-white dark:bg-gray-700 mb-2 py-1 w-full text-black dark:text-white hover:text-light-green dark:hover:text-light-green transition duration-300 cursor-pointer"
        >
          <BsPerson className="h-auto px-3 pt-1 m-auto" size="3.5rem" />
          <p className="text-[11px]">{lang("about")}</p>
        </div>
        <div
          id="Resume.jsx"
          onClick={onPageChange}
          className="rounded-lg bg-white dark:bg-gray-700 mb-2 py-1 w-full text-black dark:text-white hover:text-light-green dark:hover:text-light-green transition duration-300 cursor-pointer"
        >
          <RiNewspaperLine className="h-auto px-3 pt-1 m-auto" size="3.5rem" />
          <p className="text-[11px]">{lang("resume")}</p>
        </div>
        <div
          id="Works.jsx"
          onClick={onPageChange}
          className="rounded-lg bg-white dark:bg-gray-700 mb-2 py-1 w-full text-black dark:text-white hover:text-light-green dark:hover:text-light-green transition duration-300 cursor-pointer"
        >
          <IoMdCodeWorking className="h-auto px-3 pt-1 m-auto" size="3.5rem" />
          <p className="text-[11px]">{lang("works")}</p>
        </div>
        <div
          id="Contact.jsx"
          onClick={onPageChange}
          className="rounded-lg bg-white dark:bg-gray-700 mb-2 py-1 w-full text-black dark:text-white hover:text-light-green dark:hover:text-light-green transition duration-300 cursor-pointer"
        >
          <MdOutlineAlternateEmail
            className="h-auto px-3 pt-1 m-auto"
            size="3.5rem"
          />
          <p className="text-[11px]">{lang("contact")}</p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;

// Language file search
export async function getStaticProps(context) {
  return {
    props: {
      messages: (await import(`../lang/${context.locale}.json`)).default,
    },
  };
}
