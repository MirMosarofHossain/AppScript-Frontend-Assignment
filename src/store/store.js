import { configureStore } from '@reduxjs/toolkit'
import productDataSlice from './productDataSlice'
import favoriteDataSlice from './favoriteDataSlice';

const store = configureStore({
    reducer: {
        productData:productDataSlice.reducer,
        favoriteData:favoriteDataSlice.reducer,
    },
  })

  export default store;
  export const productDataAction = productDataSlice.actions;
  export const favoriteDataAction = favoriteDataSlice.actions;
