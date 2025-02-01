import React, { useEffect, useRef, useState } from "react";
import { image1, image2, image6 } from "../menSection/index";
import allImg from "../../assets/Shop";
import HomeHeader from "./HomeHeader";
import ProductsSlider from "../../Components/layout/Sliders/ProductsSlider";
import { FaArrowLeft } from "react-icons/fa6";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";

const images = [image1, image2, image6];

const Home = () => {
  const containerRef = useRef(null);
  const [clear, setClear] = useState(0);

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

  useEffect(() => {
    let timeOut;
    timeOut = setInterval(() => {
      nextImg();
    }, 5000);
    return () => clearInterval(timeOut);
  }, []);

  const btnsRef = useRef(null);
  return (
    <>
      <HomeHeader />
      <div className="container mx-auto w-full relative">
        <div className="flex justify-center h-fit items-center">
          <span className="w-1 h-6 rounded-full bg-indigo-600 block " />
          <h3 className="text-xl font-semibold text-indigo-500 ml-1 mr-g my-4">
            categories
          </h3>
        </div>
        <div className="relative w-[90%] mx-auto">
          <ProductsSlider ref={btnsRef} allImg={allImg} />

          <button
            className="absolute top-1/2 right-0 p-2 mx-4 bg-gray-50 
        rounded-full -translate-y-1/2"
            onClick={() => {
              setClear((prev) =>
                prev === allImg.length - 3 ? prev : prev + 1
              );
              btnsRef.current.handleNext();
            }}
          >
            <GoChevronRight size={20} />
          </button>
          <button
            className="absolute top-1/2 left-0  p-2 mx-4 bg-gray-50 rounded-full -translate-y-1/2"
            onClick={() => {
              setClear((prev) => (prev === 0 ? 0 : prev - 1));
              btnsRef.current.handlePrev();
            }}
          >
            <GoChevronLeft size={20} />
          </button>
          {clear > 0 && (
            <button
              className="absolute top-2 right-1 text-gray-50 animate-bounce "
              onClick={() => {
                setClear(0);
                btnsRef.current.handleClear();
              }}
            >
              <FaArrowLeft size={22} className="mx-4" />
            </button>
          )}
        </div>
      </div>

    </>
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
