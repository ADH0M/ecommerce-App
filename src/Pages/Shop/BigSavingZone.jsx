import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import allImg from "../../assets/Shop/index";
import style from "./shop.module.css";
import { useTranslation } from "react-i18next";
import i18n from "../../utils/Language";

const BigSavingZone = () => {
  const {t}=useTranslation();
  console.log(i18n.dir());
  
  return (
    <div className="h-fit p-4">
      <div className="w-full h-full relative">
        <h2
           className={`${
          i18n.dir() === "rtl" ? "border-r-4" : "border-l-4"
        } border-pink-600 rounded mt-2 mb-6 px-2 text-lg font-semibold text-indigo-600 capitalize `}
        >
          {t("BigSavingZone")}
        </h2>

        <div
          className={`grid grid-cols-1 sm:grid-cols-6 sm:grid-rows-2 gap-4 ${style.BigSavingZone}`}
        >
          {allImg.map((item) => (
            <div
              key={item.id}
              className={`bg-blue-500  bg-cover h-[450px] bg-center flex flex-col justify-end 
                object-cover  rounded-md bg-no-repeat w-full`}
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div className="bg-gray-50 bg-opacity-55 w-full p-4 " dir="ltr">
                <h3  className="text-lg font-medium text-indigo-600 hover:border-blue-700
                 border-b border-b-transparent transition-all duration-300 w-fit cursor-pointer " >
                  {item.title}
                </h3>
                <p className="text-gray-500" >{item.des}</p>

                <p className="  flex items-center  " >
                  <span className="block w-1/2 text-cyan-600">
                    {item.discount}
                  </span>
                  <FaArrowDownLong className=" text-cyan-600 active" />
                </p>

                <p className="flex flex-col justify-center items-center relative">
                  <button
                    className="border px-3 py-1 mt-1 rounded-md bg-indigo-500 text-gray-50
                   hover:text-indigo-600 hover:bg-gray-100 duration-200 active:bg-indigo-400"
                  >
                   {t('Shopbtn')}
                  </button>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(BigSavingZone);
