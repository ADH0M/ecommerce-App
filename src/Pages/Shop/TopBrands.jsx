import React from "react";
import image1 from "../../assets/Shop/TopBrands/h&m.jpg";
import image2 from "../../assets/Shop/TopBrands/puma.jpg";
import image3 from "../../assets/Shop/TopBrands/nike.webp";
import image4 from "../../assets/Shop/TopBrands/levi's.jpg";
import image5 from "../../assets/Shop/TopBrands/uspa.png";

const img = [image1, image2, image3, image4, image5];

const TopBrands = () => {
  return (
    <div className="w-full h-fit my-5 p-4 flex justify-center rounded-md mx-auto">
      <div className="flex justify-center flex-col items-center bg-gray-800 bg-opacity-85  gap-5 p-4 h-fit w-full md:w-[90%] rounded-md ">

        <div className="mt-3 mb-3">
          <h3 className="text-2xl text-gray-50 p-2 font-medium ">Top Brands Deal </h3>
          <p className="px-[10px]  text-[18px] font-normal text-gray-300">
            <span className="inline-block ">Up to</span>
            <span className="text-yellow-200"> 60% </span>
            <span>off on Brands</span>
          </p>
        </div>

        <div className="flex mb-5 gap-4">
          {img.map((item, index) => (
            <div key={index}>
              <img
                src={item}
                alt=""
                className=" w-[90px] min-h-[40px] h-[50px]  sm:w-[110px] sm:min-h-[90px] sm:h-[90px]  bg-white rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBrands;
