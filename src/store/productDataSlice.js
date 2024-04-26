import { createSlice } from "@reduxjs/toolkit";

const productDataSlice = createSlice({
    name:"productSlice",
    initialState:{
        products:[]
    },
    reducers:{
        updateData:(state,action)=>{
            console.log("padm...",action.payload);
            state.products = action.payload;    
        }
    }
})
export default productDataSlice;