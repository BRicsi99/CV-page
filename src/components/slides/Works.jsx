import React, { useContext } from "react";
import PopUpContext from "../../context/PopUpContext";
import {works} from "@/assets/Works";
import { useTranslations } from "next-intl";

function Works() {
  const { setVisible } = useContext(PopUpContext);
  const lang = useTranslations("Works");

  const onSetVisible = (e) => {
    const item = works.find(
      (item) => item.id.toString() === e.currentTarget.id
    );
    if (window.event.ctrlKey) {
      const newTab = window.open(item.url, "_blank");
      newTab.focus();
    } else {
      setVisible(item);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold pt-8 lg:pt-0 text-light-green">
        {lang("title")}
      </h1>
      <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-6">
        <div className="grid gap-4">
          {works.slice(0, Math.ceil(works.length / 2)).map((item) => (
            <div key={item.id} className="cursor-pointer">
              <img
                id={item.id}
                className="h-auto max-w-full rounded-lg border shadow"
                src={item.image}
                alt={item.name}
                onClick={onSetVisible}
              />
            </div>
          ))}
        </div>
        <div className="grid gap-4">
          {works.slice(Math.ceil(works.length / 2)).map((item) => (
            <div key={item.id} className="cursor-pointer">
              <img
                id={item.id}
                className="h-auto max-w-full rounded-lg  border shadow"
                src={item.image}
                alt={item.name}
                onClick={onSetVisible}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Works;

// Language file search
export async function getStaticProps(context) {
  return {
    props: {
      messages: (await import(`../../lang/${context.locale}.json`)).default,
    },
  };
}
