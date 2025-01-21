import React, { useEffect, useState } from "react";
import { TfiArrowCircleRight, TfiArrowCircleLeft } from "react-icons/tfi";
import supabase from "../../utils/supabase/Api";
import { useTranslation } from "react-i18next";

const Slider = () => {
  const { t } = useTranslation();
  const [slider, setSlider] = useState(33);
  const [image, setImage] = useState(1);
  const [myImage, setMyImage] = useState(null);

  const handleSliderRight = () => {
    if (slider < 99) {
      setImage((prev) => prev + 1);
      setSlider((prev) => prev + 33);
    } else {
      setSlider(33);
      setImage(1);
    }
  };

  const handleSliderLeft = () => {
    setSlider((prev) => {
      if (prev <= 33) {
        return 99;
      } else {
        return prev - 33;
      }
    });

    setImage((prev) => {
      if (prev <= 1) {
        return 3;
      } else {
        return prev - 1;
      }
    });
  };

  const getdata = async () => {
    try {
      const data = await supabase.from("shop").select("*");

      setMyImage(data.data);
    } catch (err) {
      return err;
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="h-[90vh] mx-auto w-full relative ">
      <div className="absolute z-10 bottom-0 h-full w-full">
        <img
          src={myImage && myImage[image - 1].image_url}
          alt=""
          className="w-full h-full object-cover bg-cover bg-center "
        />
      </div>

      <div className={`w-full h-full bg-center relative  `}>
        <span className="absolute left-0 -translate-y-1/2 top-1/2 items-center p-4 md:p-10 z-50">
          <TfiArrowCircleLeft
            className="shop-arrow relative z-50"
            onClick={handleSliderLeft}
          />
        </span>

        <span className="absolute right-0  -translate-y-1/2 top-1/2 items-center p-4 md:p-10 z-50">
          <TfiArrowCircleRight
            className="shop-arrow"
            onClick={handleSliderRight}
          />
        </span>

        <div className="px-32 py-36 z-40 relative top-0 left-0 right-0 bottom-0 w-full h-full">
          <div className="text-xl text-shopText font-semibold my-6 ">
            <span>{t("TShirt")}</span>
            <span> / </span>
            <span>{t("Tops")}</span>
          </div>

          <div className="my-6">
            <h3 className="text-shopText font-semibold text-5xl leading-[60px] ">
              {t("ShopTitle1")}
              <br />
              {t("ShopTitle2")}
            </h3>
          </div>

          <div className="text-gray-600 ">
            <span>{t("ShopCool")} / </span>
            <span>{t("ShopColorful")} / </span>
            <span>{t("ShopComf")}</span>
          </div>

          <div className="h-4 w-36 rounded-md  bg-gray-50 rounded-ful text-gray-300 absolute bottom-10 left-1/2 -translate-x-1/2">
            <span
              className={`h-full  rounded-full   bg-cyan-200 rounded-ful text-gray-300 block `}
              style={{
                width: `${slider}%`,
              }}
            />
          </div>

          <button className="z-50  px-6 border text-gray-600 border-blue-50 py-2 mt-5 rounded-md mx-6 bg-gray-50 hover:bg-indigo-500 hover:text-gray-50">
            {t('Shopbtn')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Slider);
