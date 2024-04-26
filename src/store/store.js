import { configureStore } from '@reduxjs/toolkit'
import productDataSlice from './productDataSlice'

const store = configureStore({
    reducer: {
        productData:productDataSlice.reducer
    },
  })

  export default store;
  export const productDataAction = productDataSlice.actions;
