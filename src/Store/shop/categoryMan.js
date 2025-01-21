import { createSlice } from '@reduxjs/toolkit';
import {
    image1,
image2,
image3,
image4,
image5,
image6,
image7,
image8,
image9,
image10,
} from '../../Pages/menSection/index';

const initialState = [
    {img_url :image5 , title:'Shirts' , id:'123kla83' , des:'Explore new'},
    {img_url :image2 , title:'Printed T-shirt' , id:'lal8934' , des:'Explore new'},
    {img_url :image8 , title:'Plain T-shirt' , id:'af89932' , des:'Explore new'},
    {img_url :image9 , title:'Polo T-shirt' , id:'lows934' , des:'Explore new'},
    {img_url :image4 , title:'Hoodies ' , id:'fahow3362' , des:'Explore new'},
    {img_url :image3 , title:'Sweetshirt' , id:'9190kfayu' , des:'Explore new'},
    {img_url :image7 , title:'jeans' , id:'ljk9354' , des:'Explore new'},
    {img_url :image6 , title:'activewear' , id:'58lf9fq0' , des:'Explore new'},
];

const menSectionSlice = createSlice({
    name:'menSection',
    initialState , 
    reducers:{},
});

export default menSectionSlice.reducer;

