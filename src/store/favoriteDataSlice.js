import { createSlice } from "@reduxjs/toolkit";

const favoriteDataSlice = createSlice({
    name:"favoriteSlice",
    initialState:{
        data:[] 
    },
    reducers:{
        addData:(state,action)=>{
            // console.log(action.payload);
            let arr = state.data.filter(((elm)=>elm.id == action.payload.id))

            if(arr.length == 0){
               state.data = [...state.data,action.payload]; 
            }
            else{
                state.data = state.data;
            }
            
        },
        
    }
})
export default favoriteDataSlice;