import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenuSearchLine } from "react-icons/ri";
import { FaChevronRight } from "react-icons/fa";
import Filter from "./Filter";
import Price from "./Price";
import Colors from "./Colors";
import Size from "./Size";

const filterSection = [
  { id: "al34982", title: "T-shirt" },
  { id: "892jkll", title: "Plain T-shirt" },
  { id: "98rj7ul", title: "Full Sleeve T-shirt" },
  { id: "oai892l", title: "Joggers T-shirt" },
  { id: "al89289", title: "PayJamas" },
  { id: "kqiwe3l", title: "Hoodies" },
  { id: "92ka9f2", title: "Jeans" },
  { id: "12l89kl", title: "Active T-shirt" },
];

const Asidebar = () => {
  const [openSections , setoPenSections] = useState({
    openFilter: false ,
    openPrice : true ,
    openColor : true ,
    openSize  : false ,
  });

  const hanldeOpenFilter = () => {
    setoPenSections((prev) => ({ ...prev, openFilter: !prev.openFilter }));
  };

  const hanldeOpenPrice = () => {
    setoPenSections((prev) => ({ ...prev, openPrice: !prev.openPrice }));
  };  

  const hanldeOpenColors= () => {
    setoPenSections((prev) => ({ ...prev, openColor: !prev.openColor }));
  };

  const hanldeOpenSize= () => {
    setoPenSections((prev) => ({ ...prev, openSize: !prev.openSize }));
  };


  return (
    <div className="flex flex-col gap-4  py-4 w-full ">

      <Filter openSections={openSections} hanldeOpenFilter={hanldeOpenFilter} filterSection={filterSection}/>
      <Price openPrice={openSections.openPrice} hanldeOpenPrice={hanldeOpenPrice}/>
      <Colors hanldeOpenColors={hanldeOpenColors} openColor={openSections.openColor}/>
      <Size hanldeOpenSize={hanldeOpenSize} openSize={openSections.openSize}/>
    </div>
  );
};

export default Asidebar;
