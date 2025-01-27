import React, { useRef, useState, useLayoutEffect } from "react";

const myData = [
  { id: 1, text: "عنصر قصير" },
  { id: 2, text: "عنصر أطول قليلاً" },
  {
    id: 3,
    text: "عنصر طويل جدًا لأنه يحتوي على نص أكثر بكثير من العناصر الأخرى",
  },
  { id: 4, text: "عنصر متوسط الطول" },
];

const Items = () => {
  const [state, setState] = useState(myData);
  const [focusedIndex, setFocusedIndex] = useState(null);

  const elementRef = useRef([]);

  useLayoutEffect(() => {
    if (focusedIndex !== null && elementRef.current[focusedIndex]) {
      // التركيز على العنصر الذي تم تحديده
      elementRef.current[focusedIndex].focus();
    }
  }, [focusedIndex]);

  return (
    <div className="h-full">
      <ul>
        {state.map((item, index) => (
          <li
            key={item.id}
            ref={(el) => (elementRef.current[index] = el)}
            tabIndex={0} // يجعل العنصر قابلاً للتركيز
            onFocus={() => setFocusedIndex(index)}
            style={{
              padding: "8px",
              border: focusedIndex === index ? "1px solid blue" : "1px solid gray",
              marginBottom: "4px",
              borderRadius: "4px",
              outline: "none",
              backgroundColor:'#eee'
            }}
            className="transition-all duration-200 "
          >
            {item.text}
          </li>
        ))}
      </ul>
      {focusedIndex !== null && <div>العنصر رقم {focusedIndex + 1} تم التركيز عليه</div>}
      <button
        onClick={() => {
          setState((prev) => [
            ...prev,
            { id: prev.length + 1, text: `عنصر جديد ${prev.length + 1}` },
          ]);
        }}
        style={{
          padding: "8px 16px",
          marginTop: "8px",
          cursor: "pointer",
        }}
      >
        إضافة عنصر
      </button>
    </div>
  );
};

export default Items;
