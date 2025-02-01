/* eslint-disable react/prop-types */

import { motion, AnimatePresence } from "framer-motion";
import { RiMenuSearchLine } from "react-icons/ri";
import { FaChevronRight } from "react-icons/fa";
import React, { useLayoutEffect, useRef, useState } from "react";

const Filter = ({ openSections, hanldeOpenFilter, filterSection }) => {
  const filterRef = useRef([]);
  const [currentEle, setCurrentEle] = useState(null);

  useLayoutEffect(()=>{
    if(currentEle ){
        filterRef.current[currentEle].focus()
    }
  } ,[currentEle])
  return (
    <div className="w-full ">
      <div className="border-b w-full py-2 flex justify-between items-center">
        <h3>
          <button onClick={hanldeOpenFilter} className="asideSection">
            Filter
          </button>
        </h3>

        <RiMenuSearchLine size={22} className="text-gray-600 mx-2" />
      </div>
      <AnimatePresence>
        {openSections.openFilter && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="w-full h-full flex flex-col gap-1 px-3 mt-4">
              {filterSection?.length > 0 &&
                filterSection.map((item, ind) => (
                  <li
                    className={`text-gray-600/90  ${currentEle === ind ?'border-gray-600 border-b-2':'border-b border-transparent' }  py-[5px]
                    hover:border-gray-300 duration-500 flex justify-between items-center `}
                    tabIndex={0}
                    ref={(el) => (filterRef.current[ind] = el)}
                    key={item.id}
                    onFocus={()=>{
                        setCurrentEle(ind)
                    }}
                  >
                    <button className={`w-full text-start ${currentEle === ind ?'px-2 ':'hover:px-0 ' }   duration-300`}>
                      {item.title}
                    </button>
                    <FaChevronRight size={14} className="text-gray-400" />
                  </li>
                ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default React.memo(Filter);
