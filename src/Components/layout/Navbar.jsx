import React, { useState } from "react";
import { Link } from "react-router";
import { SlSettings } from "react-icons/sl";
import useLanguage from "../../Hooks/useLanguage";


const Navbar = () => {
    const [openSetting ,setOpenSettings ] = useState(false);
    const { changeLanguage } = useLanguage();

  return (

    <nav className={` w-full bg-gray-50 shadow-md  `} dir="ltr">
      <div className="w-full container mx-auto overflow-hidden h-16 sm:px-2  ">

      <div className="flex justify-evenly items-center  w-full h-full  ">

          <div className="cursor-pointer uppercase text-2xl font-semibold text-logo">
          logo          
          </div>

          <div className="flex-1  justify-center hidden sm:flex" >
            <ul className="list-none gap-3  flex " >
              <Link className="nav-link" to={'/'}>home</Link>
              <Link className="nav-link" to={'/shop'}>shop</Link>
              <Link className="nav-link" to={'/aboutus'}>Aboutus</Link>
            </ul>
          </div>

          <div>
              <Link className="nav-link" to={'/login'}>login</Link>
              <Link className="nav-link" to={'/signup'}>signup</Link>
          </div>

          <div className=" flex justify-center items-center">

              <SlSettings className="cursor-pointer" 
                  onClick={()=>setOpenSettings(!openSetting)}
              />
              {openSetting && 
              <>
                  <span className="mx-2 cursor-pointer " onClick={()=>changeLanguage('en')}>en</span>
                  <span className="mx-2 cursor-pointer " onClick={()=>changeLanguage('ar')}>ar</span>
              </>
              }
          </div>

      </div>
      </div>
    </nav>
  );
};

export default Navbar;
