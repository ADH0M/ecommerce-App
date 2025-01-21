import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewArrival } from "../../Store/shop/newArrival";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useTranslation } from "react-i18next";
import i18n from "../../utils/Language";

const NewAririval = () => {
  const { t } = useTranslation();

  const [start, setStart] = useState({
    start: 0,
    end: 4,
  });

  const state = useSelector((state) => state.newAririval);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewArrival());
  }, [dispatch]);

  const handleLeftSlid = () => {
    setStart((prev) => {
      return {
        ...prev,
        end: Math.max(4, prev.end - 1),
        start: Math.max(0, prev.start - 1),
      };
    });
  };
  const handleRightSlid = () => {
    setStart((prev) => {
      return {
        ...prev,
        end: Math.min(state?.data?.length, prev.end + 1),
        start: Math.min(state?.data?.length, prev.start + 1),
      };
    });
  };

  return (
    <div className=" p-4 container mx-auto my-5" dir={i18n.dir()}>
      <div
        className={`${
          i18n.dir() === "rtl" ? "border-r-4" : "border-l-4"
        } border-pink-600 rounded mt-5 mb-2 px-2 text-lg font-semibold text-indigo-600 capitalize `}
      >
        {t("NewArrivals")}
      </div>

      <div
        className=" relative w-full h-[300px] p-4 
       rounded-md  flex flex-nowrap gap-4 transition-all duration-1000 "
       
      >
        {state?.loading ? (
          <>loading</>
        ) : (
          state?.data?.slice(start.start, start.end).map((item) => (
            <div
              key={item.id}
              className=" h-full w-full  rounded-md flex flex-col"
            >
              <img
                src={item.image_url}
                alt={item.image_name}
                className="min-h-[200px] h-[200px]  object-center rounded-md cursor-pointer"
                loading="lazy"
              />
              <h5 dir="ltr" className=" bg-gray-50 w-full p-2 text-wrap  font-light text-indigo-600 text-ellipsis overflow-hidden">
                {item.image_name}
              </h5>
            </div>
          ))
        )}
        <button
          className="absolute -right-2  top-1/2 bg-gray-600 hover:bg-opacity-35  -translate-y-1/2 bg-transparent   rounded-full text-xl text-blue-50"
          onClick={handleRightSlid}
          disabled={start?.end === state.data.length}
        >
          <MdOutlineKeyboardArrowRight />
        </button>

        <button
          className="absolute top-1/2 -left-2 -translate-y-1/2  rounded-full bg-gray-600 hover:bg-opacity-35 text-xl text-blue-50"
          onClick={handleLeftSlid}
          disabled={start?.start === 0}
        >
          <MdOutlineKeyboardArrowLeft />
        </button>
      </div>
    </div>
  );
};

export default React.memo(NewAririval);
