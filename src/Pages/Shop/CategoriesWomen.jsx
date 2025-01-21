import { useTranslation } from "react-i18next";
import { FaArrowRight } from "react-icons/fa6";
import { useSelector } from "react-redux";
import i18n from "../../utils/Language";

const CategoriesWomen = () => {
  const state = useSelector((state) => state.womenSection);
  const {t} = useTranslation();

  //


  return (
    <div className="h-fit w-full p-4">
      <div className="w-full h-full">
        <div className={`my-4 ${i18n.dir() === "rtl" ? "border-r-4" : "border-l-4"} border-pink-500 rounded px-2`}>
          <h3 className="text-xl font-semibold text-indigo-600">
            {t("CategoriesForWomen")}
          </h3>
        </div>
        <div className="flex flex-wrap gap-4  w-full overflow-hidden rounded-md" dir="ltr">
          {state.length &&
            state?.map((item) => (
              <div
                key={item.id}
                className=" rounded-t-md  flex-1 flex flex-col "
              >
                <div className="rounded-t-md  w-full overflow-hidden relative cursor-pointer">
                  <span className="absolute top-0 right-0 left-0 bottom-0 bg-black bg-opacity-30 duration-200 z-10 inset-0 hover:opacity-0 " />

                  <img
                    src={item.img_url}
                    alt={item.title}
                    loading="lazy"
                    className="min-w-[220px] w-full min-h-[290px] h-[290px] object-fil hover:scale-125 hover:-rotate-12
                     rounded-t-md "
                  />
                </div>

                <div className="px-1 bg-gray-100 pb-[6px] overflow-hidden">
                  <p className="pt-2  flex justify-between items-center ">
                    <span className="inline-block text-gray-700  ">
                      {item.title}
                    </span>
                    <span className="inline-block px-1 text-cyan-300">
                      <FaArrowRight />
                    </span>
                  </p>
                  <p className="text-sm text-gray-500 ">{item.des}</p>
                </div>
              </div>
            ))}
        </div>

      </div>
      
    </div>
  );
};

export default CategoriesWomen;
