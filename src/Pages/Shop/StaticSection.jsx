import React from "react";
import image from "../../assets/Shop/static1.jpg";
import image2 from "../../assets/Shop/static2.webp";
import { useTranslation } from "react-i18next";

const StaticSection = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-4 w-full p-4 flex flex-wrap sm:flex-nowrap mb-4 justify-center overflow-hidden rounded-md">
      <div
        className="w-[400px] bg-no-repeat bg-cover bg-center
         overflow-hidden h-[70vh] rounded-t-md p-4 flex justify-center items-center relative"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="p-2 z-50">
          <h2 className="text-indigo-800 font-semibold text-xl uppercase mb-2">
            {t("ShopStaticSectionTitle1")}
            <br />

            {t("ShopStaticSectionTitle2")}
          </h2>
          <p className="text-stone-200 font-medium mb-2">
            {t("ShopStaticSectionDescription")}
          </p>
          <div className="w-full justify-center flex ">
            <button
              className=" border p-2 rounded-md capitalize text-indigo-100
            bg-indigo-600 hover:bg-slate-50 hover:text-indigo-600 my-4"
            >
             {t('Shopbtn')}
            </button>
          </div>
        </div>
        <span className="absolute inset-0 top-0 bottom-0 left-0 right-0 z-10 bg-black bg-opacity-30" />
      </div>
      <div className="bg-no-repeat bg-cover overflow-hidden w-[400px] h-[70vh] ">
        <img
          src={image2}
          alt=""
          className="object-fill w-full h-full overflow-hidden rounded-r-md"
        />
      </div>
    </div>
  );
};

export default React.memo(StaticSection);
