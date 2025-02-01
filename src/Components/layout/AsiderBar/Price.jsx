import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import DoubleRangeSlider from "./PriceRangeSlider";

const Price = ({ openPrice, hanldeOpenPrice }) => {
  return (
    <div>
      <motion.div className="border-b w-full py-2">
        <div
          className="asideSection cursor-pointer flex justify-between items-center"
          onClick={hanldeOpenPrice}
        >
          <h3>Price</h3>
          <motion.span>
            {!openPrice ? <GoChevronDown /> : <GoChevronUp />}
          </motion.span>
        </div>
      </motion.div>

      <AnimatePresence>
        {openPrice && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
           <DoubleRangeSlider/>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default React.memo(Price);
