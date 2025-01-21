import image1 from '../../assets/Shop/womenSection/1.webp'
import image2 from '../../assets/Shop/womenSection/2.webp'
import image3 from '../../assets/Shop/womenSection/3.webp'
import image4 from '../../assets/Shop/womenSection/4.webp'

import { createSlice } from "@reduxjs/toolkit";

const initialState = [
     {img_url :image3 , title:'Shirts' , id:'123kla83' , des:'Explore new'},
     {img_url :image4 , title:'T-Shirt' , id:'a1e22e3' , des:'Explore new'},
     {img_url :image1 , title:'Hoodies' , id:'g1243kla83' , des:'Explore new'},
     {img_url :image2 , title:'Sweatwear' , id:'xq123kla83' , des:'Explore new'},
];
const womanSection = createSlice({
    name:'womanSection',
    initialState , 
    reducers:{},
});

export default womanSection.reducer;