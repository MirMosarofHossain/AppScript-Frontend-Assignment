import { createSlice } from "@reduxjs/toolkit";

const favoriteDataSlice = createSlice({
    name:"favoriteSlice",
    initialState:{
        data:[] 
    },
    reducers:{
        addData:(state,action)=>{
            console.log(action.payload);
            state.data = [...state.data,action.payload];  
        },
        
    }
})
export default favoriteDataSlice;