import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import image1 from '../../assets/Shop/TopBrands/rating1.webp'
import image2 from '../../assets/Shop/TopBrands/Rating2.webp'
import image3 from '../../assets/Shop/TopBrands/Rating3.webp'

const feedback = [
  {
    username: "floyd Miles",
    des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, `,
    rate: 3.5,
    id: "aot38941o813l",
    logo: image3,
  },
  {
    username: "Ronald Richards",
    des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, `,
    rate: 4,
    id: "9ja982mau",
    logo: image2,
  },
  {
    username: "Savannah Nguyen",
    des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, `,
    rate: 3.5,
    id: "98934urnav8923",
    logo: image1,
  },
];

const Feedback = () => {
   
    return (
    <div dir="ltr">
      <div className="flex flex-col sm:flex-row flex-wrap gap-5 p-4 my-8 ">
        {feedback.map((item) => (
          <div
            key={item.id}
            className="flex-1 border border-blue-500 p-5 rounded-lg"
          >
            <div className="relative">
              <img src={item.logo} alt="logo" className="inline-block rounded-full 
              w-16 h-16  border border-blue-500 object-cover" />

              <span className=" absolute top-0 right-0 flex">

               {[...Array(5)].map(( _,ind)=>(
                <FaStar key={ind}
                    color={item.rate >= ind + 1 ?'#ffc107':'#e4e5e9'}
                />
               )) }
              </span>
            </div>

            <h2 className="text-blue-600 font-medium text-lg my-2">
              {item.username}
            </h2>
            <p className="text-gray-600 text-[16px] text-clip">{item.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
