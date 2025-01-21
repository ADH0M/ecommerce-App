import { configureStore } from "@reduxjs/toolkit";
import newAririval from "../Store/shop/newArrival";
import menSectionSlice from './shop/categoryMan'
import womenSection from './shop/categoryWomen'

const store =configureStore({
    reducer:{
        newAririval,
        menSectionSlice,
        womenSection
    }
});

export default store;