import { createSlice } from "@reduxjs/toolkit";

const productDataSlice = createSlice({
    name:"productSlice",
    initialState:{
        products:[]
    },
    reducers:{
        updateData:(state,action)=>{
            state.products = action.payload;    
        },
        lowToHigh:(state,action)=>{
            const sortedItems = state.products.sort((a, b) => a.price - b.price);
            state.products = sortedItems;

        },
        highToLow : (state,action)=>{
            const sortedItems = state.products.sort((a, b) => b.price - a.price);
            state.products = sortedItems;
        },
        rearrange : (state)=>{
            const sortedItems = state.products.sort((a, b) => a.id - b.id);
            state.products = sortedItems;
        }
    }
})
export default productDataSlice;