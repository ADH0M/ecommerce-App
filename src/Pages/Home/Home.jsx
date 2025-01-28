import React, { useEffect, useRef } from "react";
import { image1, image2, image6 } from "../menSection/index";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
import Itmes from "./Items";
import HomeHeader from "./HomeHeader";

const images = [image1, image2, image6];

const Home = () => {
  const containerRef = useRef(null);

  const prevImg = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -containerRef.current.clientWidth, // تحريك بعرض الصورة
        behavior: "smooth", // تحريك سلس
      });
    }
  };

  const nextImg = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: containerRef.current.clientWidth, // تحريك بعرض الصورة
        behavior: "smooth", // تحريك سلس
      });
    }
  };

  useEffect(()=>{
    let timeOut
     timeOut = setInterval(() => {
        nextImg()
    }, 5000);
    return ()=> clearInterval(timeOut);
  } ,[]);

  return (
    <div className=" mx-auto w-full ">
        <HomeHeader/>
    </div>
  );
};

export default Home;

// function trySlider(){
//     return (
         // <div className="h-screen w-full bg-gray-200 flex justify-center items-center">
    //   <div className="w-full overflow-hidden relative">
        
    //     <div
    //       className="flex overflow-x-auto scroll-snap-x-mandatory scroll-smooth transition-transform imageScroll"
    //       ref={containerRef}
    //       style={{ scrollSnapType: "x mandatory" }}
    //     >
    //       {images.map((item, ind) => (
    //         <div
    //           key={ind}
    //           className="min-w-full w-full flex-shrink-0 scroll-snap-align-start"
    //         >
    //           <img src={item} alt="" className="w-full h-full " />
    //         </div>
    //       ))}
    //     </div>

    //     <button
    //       className="absolute top-[50%] left-4 text-blue-600 text-4xl hover:opacity-50"
    //       onClick={prevImg}
    //     >
    //       <AiOutlineLeftCircle />
    //     </button>

    //     <button
    //       className="absolute top-[50%] right-4 text-blue-600 text-4xl hover:opacity-50"
    //       onClick={nextImg}
    //     >
    //       <AiOutlineRightCircle />
    //     </button>
    //   </div>
    // </div>
//     )
// }