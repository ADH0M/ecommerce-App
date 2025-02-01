import React, { useState } from "react";

const DoubleRangeSlider = () => {
  const [minValue, setMinValue] = useState(1000);
  const [maxValue, setMaxValue] = useState(8000);

  const min = 0; 
  const max = 10000; 

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 1); 
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(value);
  };

  return (
    <div className="p-6 max-w-md mx-auto w-full border-b">
      <div className="relative flex items-center justify-center  flex-col  w-full">

        <div className="flex flex-col min-w-full relative">
        <div className="absolute w-full h-1 bg-gray-300 rounded-md top-1/2 -translate-y-1/2 z-10"/>
          <input
            type="range"
            min={min}
            max={max}
            value={minValue}
            onChange={handleMinChange}
            className="thumb thumb-left w-full"
          />

          <input
            type="range"
            min={min}
            max={max}
            value={maxValue}
            onChange={handleMaxChange}
            className="thumb thumb-right w-full"
          />
        </div>

        <div className="flex justify-between w-full pt-2 text-sm">
          <span>{minValue}</span>
          <span>{maxValue}</span>
        </div>
      </div>
    </div>
  );
};

export default DoubleRangeSlider;
