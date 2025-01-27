import React, { useCallback, useEffect, useState } from "react";
import { TfiArrowCircleRight, TfiArrowCircleLeft } from "react-icons/tfi";
import supabase from "../../utils/supabase/Api";
import { useTranslation } from "react-i18next";

const Slider = () => {
  const { t } = useTranslation();
  const [currentImg, setCurrentImg] = useState(0);
  const [myImage, setMyImage] = useState([]);

  const handleSliderRight = useCallback(() => {
    setCurrentImg((prev) => (prev === myImage.length - 1 ? 0 : prev + 1));
  }, [myImage]);

  const handleSliderLeft = useCallback(() => {
    setCurrentImg((prev) => (prev === 0 ? myImage.length - 1 : prev - 1));
  }, [myImage]);

  const getdata = async () => {
    try {
      const { data, error } = await supabase.from("shop").select("*");
      if (error) throw error;
      setMyImage(data || []);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleSliderRight();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentImg, handleSliderRight]);



  return (
    <div className="h-[93vh] w-full bg-gray-200 flex justify-center items-center" dir="ltr">
      <div className="w-full overflow-hidden relative h-full">
        <div
          className="flex transition-transform duration-300 ease-linear relative h-full"
          style={{ transform: `translateX(-${currentImg * 100}%)` }}
          dir="ltr"
        >
          {myImage.map((item, ind) => (
            <div key={ind} className="w-full flex-shrink-0 h-full">
              <img src={item.image_url} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        <div className={`w-full h-full bg-center absolute left-0 top-0 sm:left-5 `}>
          <div className="px-32 py-36 z-40 w-full h-full">
            <div className="text-lg sm:text-xl text-shopText font-semibold my-2 sm:my-3 md:my-6">
              <span>{t("TShirt")}</span>
              <span> / </span>
              <span>{t("Tops")}</span>
            </div>

            <div className="my-6">
              <h3 className="text-shopText font-semibold text-2xl sm:text-3xl md:text-5xl leading-[40px] sm:leading-[60px]">
                {t("ShopTitle1")}
                <br />
                {t("ShopTitle2")}
              </h3>
            </div>

            <div className="text-gray-600">
              <span>{t("ShopCool")} / </span>
              <span>{t("ShopColorful")} / </span>
              <span>{t("ShopComf")}</span>
            </div>

            <div className="h-4 w-36 rounded-md bg-gray-50 absolute bottom-10 left-1/2 -translate-x-1/2">
              <span
                className="h-full rounded-full bg-cyan-200 block"
                style={{
                  width: `${((currentImg + 1) / myImage.length) * 100}%`,
                }}
              />
            </div>

            <button className="z-50 px-6 border text-gray-600 border-blue-50 py-2 mt-5 
            rounded-md  sm:mx-6 bg-gray-50 hover:bg-indigo-500 hover:text-gray-50 ">
              {t("Shopbtn")}
            </button>
          </div>
        </div>

        <span className="p-4 md:p-10 z-50 absolute top-1/2 left-5 -translate-y-1/2">
          <TfiArrowCircleLeft className="shop-arrow relative z-50" onClick={handleSliderLeft} />
        </span>

        <span className="p-4 md:p-10 z-50 absolute top-1/2 right-5 -translate-y-1/2">
          <TfiArrowCircleRight className="shop-arrow" onClick={handleSliderRight} />
        </span>
      </div>
    </div>
  );
};

export default React.memo(Slider);