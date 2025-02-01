import { AnimatePresence, color, motion } from "framer-motion";
import React, { useLayoutEffect, useRef, useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

const size = [
  { size: "xxs", id: "123ka9" },
  { size: "xl", id: "123419" },
  { size: "xs", id: "12348v" },
  { size: "sm", id: "13894d" },
  { size: "md", id: "1234o9" },
  { size: "lg", id: "kla928" },
  { size: "2xl", id: "alo389" },
  { size: "3xl", id: "1ahjks8" },
  { size: "4xl", id: "aklo2a8" },
];
const Size = ({ hanldeOpenSize, openSize }) => {
  const [currentSize, setCurrentSize] = useState(null);
  const sizeRef = useRef([]);
  const handleFocus = (ind) => {
    setCurrentSize(ind);
  };

  useLayoutEffect(() => {
    if (currentSize) {
      sizeRef.current[currentSize].focus();
    }
  }, [currentSize]);

  return (
    <div>
      <motion.div className="border-b w-full py-2">
        <div
          onClick={hanldeOpenSize}
          className="asideSection cursor-pointer flex justify-between items-center"
        >
          <h3>Sizes</h3>
          <span>{!openSize ? <GoChevronDown /> : <GoChevronUp />}</span>
        </div>
      </motion.div>
      <AnimatePresence>
        {openSize && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-b "
          >
            <div className="my-4 p-4 flex  gap-5 font-normal flex-wrap">
              {size.map((item, ind) => (
                <div
                  key={item.id}
                  className={` ${currentSize ===ind ?'border border-blue-400' :'border border-transparent'} 
                    justify-center  items-center  cursor-pointer rounded-md duration-200
                    `}
                  ref={(el) => (sizeRef.current[ind] = el)}
                  tabIndex={0}
                  onFocus={() => {
                    handleFocus(ind);
                  }}
                >
                  <h3 className="text-sm p-2 text-gray-400">
                    {item.size}
                  </h3>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default React.memo(Size);
