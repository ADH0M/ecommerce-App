import { AnimatePresence, color, motion } from "framer-motion";
import React, { useLayoutEffect, useRef, useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

const colors = [
  { colorRate: "#b92efa", colorName: "purple", id: "123ka9" },
  { colorRate: "#000000", colorName: "black", id: "123419" },
  { colorRate: "#f82828", colorName: "red", id: "12348v" },
  { colorRate: "#fae62e", colorName: "orange", id: "13894d" },
  { colorRate: "#2e53faf4", colorName: "navy", id: "1234o9" },
  { colorRate: "#ffffff", colorName: "white", id: "kla928" },
  { colorRate: "#faa22e", colorName: "broom", id: "alo389" },
  { colorRate: "#41eb17ef", colorName: "green", id: "1ahjks8" },
  { colorRate: "#f7fa2e", colorName: "yellow", id: "aklo2a8" },
  { colorRate: "#c3f3f1", colorName: "grey", id: "laio2ll" },
  { colorRate: "#eb0dc6d6", colorName: "pink", id: "lkfa8l2" },
  { colorRate: "#231ff3d5", colorName: "pink", id: "klfa982" },
];
const Colors = ({ hanldeOpenColors, openColor }) => {
  const [currentColor ,setCurrentColor] = useState(null);
  const colorsRef = useRef([]);
  const handleFocus =(ind)=>{
    setCurrentColor(ind);
  };

    useLayoutEffect(()=>{
      if(currentColor ){
          colorsRef.current[currentColor].focus()
      }
    } ,[currentColor]);

  return (
    <div>
      <motion.div className="border-b w-full py-2">
        <div
          onClick={hanldeOpenColors}
          className="asideSection cursor-pointer flex justify-between items-center"
        >
          <h3>Colors</h3>
          <span>{!openColor ? <GoChevronDown /> : <GoChevronUp />}</span>
        </div>
      </motion.div>
      <AnimatePresence>
        {openColor && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="my-4 p-4 flex flex-wrap gap-5 text-sm font-light">
              {colors.map((item ,ind) => (
                <div
                  key={item.id}
                  className={`flex flex-col justify-center  items-center flex-1 cursor-pointer rounded-md 
                    `}
                  ref={el=>colorsRef.current[ind] = el}
                  tabIndex={0}
                  onFocus={()=>{handleFocus(ind)}}
                >
                  <div
                    className={`w-8 h-8 rounded-2xl border border-blue-100 duration-200
                    ${ ind === currentColor ?  'opacity-90' :'opacity-60' }`}
                    style={{
                      backgroundColor: item.colorRate,
                    }}
                  />

                  <h4 className="text-sm font-light text-blue-600/60 mt-1">
                    {item.colorName}
                  </h4>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default React.memo(Colors);
