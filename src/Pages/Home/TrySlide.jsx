import React, { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
const TrySlide = ({ data }) => {
  const myRef = useRef(null);
  const [width, setWidth] = useState(0);
    useLayoutEffect(()=>{
        console.log(myRef.current.scrollWidth ,myRef.current.offsetWidth);
        
        setWidth(myRef.current.scrollWidth - myRef.current.offsetWidth)
    } ,[])
  return (
    <div>
      <motion.div className="overflow-hidden cursor-grab" ref={myRef}>
        <motion.div
          className="flex "
          drag="x"
          dragConstraints={{right:0  ,left :-width}}
        >
          {data.map((item) => (
            <motion.div key={item.id} className="min-h-96 min-w-96 p-10">
              <img src={item.img} alt="" className="w-96 h-96 pointer-events-none select-none" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TrySlide;
