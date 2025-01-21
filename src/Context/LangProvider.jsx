/* eslint-disable react/prop-types */

import i18next from "i18next";
import { createContext, useEffect } from "react";
import i18n from "../utils/Language";
import Cookies from "js-cookie";

export const LangConetxt = createContext();

const LangProvider = ({ children }) => {
  const lng = Cookies.get("i18next") || "en";
  const changeLanguage = (lng) => {
    i18next.changeLanguage(lng);
    document.documentElement.dir = i18n.dir(lng);
  };

  useEffect(() => {
    document.documentElement.dir = i18n.dir();
  }, [lng]);

  return (
    <LangConetxt.Provider value={{ changeLanguage, lang: i18n.language }}>
      {children}
    </LangConetxt.Provider>
  );
};

export default LangProvider;
