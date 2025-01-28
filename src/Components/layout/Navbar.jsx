import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { SlSettings } from "react-icons/sl";
import useLanguage from "../../Hooks/useLanguage";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { AiOutlineMenuFold } from "react-icons/ai";

const Navbar = () => {
  const [openSetting, setOpenSettings] = useState(false);
  const { changeLanguage } = useLanguage();
  const [isSticky, setIsSticky] = useState(false);
  const [openLang, setOpenLang] = useState(false);
  const [openTheme, setOpenTheme] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const handleOpenLang = () => {
    setOpenTheme(false);
    setOpenMenu(false);
    setOpenLang((prev) => !prev);
  };

  const handleOpenTheme = () => {
    setOpenLang(false);
    setOpenMenu(false);
    setOpenTheme((prev) => !prev);
  };

  const handleOpenMenu = () => {
    setOpenLang(false);
    setOpenTheme(false);
    setOpenSettings(false)
    setOpenMenu((prev) => !prev);
  };

const handleSettings = () => {
  setOpenTheme(false);
  setOpenLang(false);
  setOpenMenu(false)
  setOpenSettings(!openSetting);
}

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full bg-gray-50 shadow-md ${
        isSticky
          ? "fixed translate-y-0"
          : "sticky translate-y-3 top-0 select-none"
      } z-[999] transition-transform duration-1000 ease-out`}
      dir="ltr"
    >
      <div className="w-full container mx-auto  h-16 sm:px-2  ">
        <div className="flex justify-evenly items-center  w-full h-full  ">
          <div className="cursor-pointer uppercase text-2xl font-semibold text-logo">
            logo
          </div>

          <div className="flex-1  justify-center hidden  sm:flex">
            <ul className="list-none gap-3  flex ">
              <Link className="nav-link" to={"/"}>
                home
              </Link>
              <Link className="nav-link" to={"/shop"}>
                shop
              </Link>
              <Link className="nav-link" to={"/aboutus"}>
                Aboutus
              </Link>
            </ul>
          </div>

          <div className=" flex justify-center items-center relative">
            <div className="mx-2 flex gap-1 bg-gradient-to-tr p-1 px-3 rounded-full from-green-300 to-blue-500">
              <Link
                className="text-gray-50 border-b border-transparent hover:border-blue-500 duration-200"
                to={"/login"}
              >
                login
              </Link>
              <Link
                className="text-green-700 border-b border-transparent hover:border-blue-500 duration-200"
                to={"/signup"}
              >
                signup
              </Link>
            </div>

            <SlSettings
              className="cursor-pointer w-6"
              onClick={handleSettings}
            />
            {openSetting && (
              <div
                className="absolute bg-gray-50 h-fit w-56 right-0 top-10 
                rounded-l-md
              "
              >
                <div className="p-3 m-2 flex flex-col gap-3">
                  <dl className="border-b pb-1 hover:px-1 flex gap-2 relative duration-300">
                    <button
                      onClick={handleOpenLang}
                      className="bx-2 text-gray-800"
                    >
                      lang
                    </button>
                    {openLang && (
                      <div className="bg-white w-20 rounded-sm absolute top-0 -left-[103px] py-1">
                        <dd className="text-gray-900 px-2">
                          <button
                            className="border-b w-full active:border-blue-50 hover:border-blue-600"
                            onClick={() => {
                              changeLanguage("en");
                              setOpenLang(false);
                            }}
                          >
                            En
                          </button>
                        </dd>
                        <dd className="text-gray-900 p-2">
                          <button
                            onClick={() => {
                              changeLanguage("ar");
                              setOpenLang(false);
                            }}
                            className="border-b w-full active:border-blue-50 hover:border-blue-600"
                          >
                            Ar
                          </button>
                        </dd>
                      </div>
                    )}
                  </dl>

                  <dl className="border-b pb-1 hover:px-1 flex gap-2 relative duration-300">
                    <button
                      onClick={handleOpenTheme}
                      className="bx-2 text-gray-800"
                    >
                      Themes
                    </button>
                    {openTheme && (
                      <div className="bg-white w-fit  rounded-sm absolute top-0 -left-[101px] py-1 transition-all duration-1000">
                        <dd className="text-gray-900 px-2">
                          <button
                            className="border-b w-full active:border-blue-50 hover:border-blue-600 inline-flex items-center gap-2"
                            onClick={() => {
                              setOpenTheme(false);
                            }}
                          >
                            <MdDarkMode />
                            <span>Dark</span>
                          </button>
                        </dd>
                        <dd className="text-gray-900 p-2">
                          <button
                            onClick={() => {
                              setOpenTheme(false);
                            }}
                            className="border-b w-full active:border-blue-50 hover:border-blue-600 inline-flex items-center gap-2"
                          >
                            <MdOutlineDarkMode />
                            <span>Light</span>
                          </button>
                        </dd>
                      </div>
                    )}
                  </dl>
                </div>
              </div>
            )}
          </div>

          <div className=" relative  sm:hidden flex justify-end mx-2 items-center">
            <button onClick={handleOpenMenu}>
              <AiOutlineMenuFold className="text-3xl text-gray-700   " />
            </button>
            {openMenu && (
              <ul className="list-none gap-3  flex flex-col absolute top-8 right-0 bg-gray-50 p-2 rounded-b-md ">
                <Link className="nav-link" to={"/"}>
                  home
                </Link>
                <Link className="nav-link" to={"/shop"}>
                  shop
                </Link>
                <Link className="nav-link" to={"/aboutus"}>
                  Aboutus
                </Link>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
