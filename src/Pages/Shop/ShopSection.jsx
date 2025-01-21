import React from "react";
import NewArriival from "./NewAririval";
import BigSavingZone from "./BigSavingZone";
import StaticSection from "./StaticSection";
import CategoriesMan from "./CategoriesMan";
import CategoriesWomen from "./CategoriesWomen";
import TopBrands from "./TopBrands";
import Feedback from "./Feedback";

const ShopSection = () => {
  return (
    <div className="container mx-auto ">
      <NewArriival />
      <BigSavingZone/>
      <StaticSection/>
      <CategoriesMan/>
      <CategoriesWomen/>
      <TopBrands/>
      <Feedback/>
    </div>
  );
};

export default React.memo(ShopSection);
