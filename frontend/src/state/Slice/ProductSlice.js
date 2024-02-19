import { createSlice } from "@reduxjs/toolkit";
import { products } from "../Actions/ProductActions";


export const productSlice = createSlice({
    name: "produdct",
    initialState:{
      products:[],
      isRequest: false,
      isSuccess: false,
      errorMessage: "",
  
    },
    reducers: {
      resetProductState: (state) => {
        state.isRequest = false;
        state.isSuccess = false;
        state.errorMessage = "";
        state.data = null;
        state.products=null
        
  
   
      },
    },
  
    
    extraReducers: (builder) => {
      builder
        .addCase(products.pending, (state) => {
          state.isRequest = true;
        })
        .addCase(products.fulfilled, (state, action) => {
          state.isRequest = false;
          state.isSuccess = true;
          state.data = action.payload;
          state.products = state.data
        })
        .addCase(products.rejected, (state, action) => {
          state.isRequest = false;
          state.isSuccess = false;
          state.errorMessage = action.payload;
        })
        
  
    },
  });
  


  export const productReducer = productSlice.reducer
  export const {resetProductState} = productSlice.actions