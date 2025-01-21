import { useContext } from "react";
import { LangConetxt } from "../Context/LangProvider";

export default function useLanguage(){
    return useContext(LangConetxt)
}