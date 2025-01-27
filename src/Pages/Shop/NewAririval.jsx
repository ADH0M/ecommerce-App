import React, { useCallback, useEffect, useState } from "react";
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
  const state = useSelector((state) => state.newAririval);
  const [currentImg, setCurrentImg] = useState(0);

  const handleRightSlid = useCallback(() => {
    setCurrentImg((prev) => (prev === state.data.length - 1 ? 0 : prev + 1));
  }, [state.data]);

  const handleLeftSlid = useCallback(() => {
    setCurrentImg((prev) => (prev === 0 ? state.data.length - 1 : prev - 1));
  }, [state.data]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewArrival());
  }, [dispatch]);



  return (
    <div className=" p-4 container mx-auto my-5 relative " dir={i18n.dir()}>
      <div
        className={`${
          i18n.dir() === "rtl" ? "border-r-4" : "border-l-4"
        } border-pink-600 rounded mt-5 mb-2 px-2 text-lg font-semibold text-indigo-600 capitalize `}
      >
        {t("NewArrivals")}
      </div>

      <div className=" w-[90%] h-[400px] flex overflow-hidden gap-4 mt-5 rounded-md mx-auto p-5">
        {state?.loading ? (
          <>loading</>
        ) : (
          state?.data?.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-[22%]  cursor-pointer h-full flex flex-col overflow-hidden"> 
              <img
                src={item.image_url}
                alt={item.image_name}
                className="w-full min-h-[80%] h-[80%] object-cover object-center rounded-md "
                loading="lazy"
              />
              <h5
                dir="ltr"
                className=" bg-gray-50 w-full p-2 text-wrap mt-1
                  min-h-[20%] max-h-[20%] h-[20%]  font-medium text-indigo-600 text-ellipsis "
              >
                {item.image_name}
              </h5>
            </div>
          ))
        )}
        ;
        <button
          className="absolute top-1/2 right-6 -translate-y-1/2  
          rounded-full bg-blue-600 hover:bg-opacity-35 text-4xl text-blue-50"
          onClick={handleRightSlid}
        >
          <MdOutlineKeyboardArrowRight />
        </button>

        <button
          className="absolute top-1/2 left-6 -translate-y-1/2  
          rounded-full bg-blue-600 hover:bg-opacity-35 text-4xl text-blue-50"
          onClick={handleLeftSlid}

          // disabled={start?.start === 0}
        >
          <MdOutlineKeyboardArrowLeft />
        </button>
      </div>
    </div>
  );
};

export default React.memo(NewAririval);
