import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import  supabase  from "../../utils/supabase/Api";

const initialState = {
    loading:true, 
    data :[] ,
    error:null,
};

export const getNewArrival = createAsyncThunk('newArrival/getNewArrival' ,async( )=>{
    try {
        const data = await supabase.from('shopSections').select('*').eq('section_name' ,'new arrivals');
        return data.data        
    } catch (error) {
        console.log(error);
    };
});

const newArrivalSlice = createSlice({
    name:'newArrival' ,
    initialState ,
    reducers:{}  ,
    extraReducers:(builder)=>{
        builder.addCase(getNewArrival.pending ,(state ,action)=>{
            state.loading = true 
        });
        builder.addCase(getNewArrival.fulfilled,(state ,action)=>{
            state.loading = false 
            state.data = action.payload;
        });
        
        builder.addCase(getNewArrival.rejected ,(state ,action)=>{
            state.loading = false ;
            state.error =action.payload;
        })
    }
});



export default newArrivalSlice.reducer ;

