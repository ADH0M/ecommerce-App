/* eslint-disable react/prop-types */
import  { forwardRef, useImperativeHandle, useRef } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router";

// eslint-disable-next-line react/display-name
const ProductsSlider =forwardRef( ({allImg}, ref) => {
  const imgRef = useRef(null);

    useImperativeHandle(ref , ()=>({
        
        handleNext:()=>{
            imgRef.current.scrollBy({
                left:280,
                behavior:'smooth'
            })
        }
        ,
        handlePrev:()=>{
            imgRef.current.scrollBy({
                left:-280,
                behavior:'smooth'
            })
        },

        handleClear:()=>{
            imgRef.current.scrollBy({
                left:- imgRef.current.scrollWidth,
                behavior:'smooth'
            })
        }
    }) ,[]);
    const navigate = useNavigate();

    

  return (
    <div className="h-96 w-full overflow-hidden relative mt-5 " >
      <motion.div
        className=" flex flex-nowrap h-80 w-full overflow-x-hidden gap-4 snap-mandatory scroll-smooth "
        ref={imgRef}

      >
        {allImg.map((item) => (
          <motion.div key={item.id} className="flex-shrink-0 flex flex-col h-full select-none cursor-pointer"
            onClick={()=>navigate(`/shop/men/${item.id}?category=${item.title}&des=${item.des}`)}
          >
            <img
              className="w-[280px]  h-[85%] rounded-t-md object-cover pointer-events-none "
              src={item.img}
              alt={item.title}
            />
            <p className="w-fit p-4 h-[15%]">{item.title}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
});

export default ProductsSlider;
