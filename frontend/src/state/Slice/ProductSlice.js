import { createSlice } from "@reduxjs/toolkit";
import { getproduct, products } from "../Actions/ProductActions";


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
  


  export const getProductSlice = createSlice({
    name: "getproduct",
    initialState:{
      product:[],
      isRequest: false,
      isSuccess: false,
      errorMessage: "",
  
    },
    reducers: {
      resetProductIdState: (state) => {
        state.isRequest = false;
        state.isSuccess = false;
        state.errorMessage = "";
        state.data = null;
        state.product=null
        
  
   
      },
    },
  
    
    extraReducers: (builder) => {
      builder
        .addCase(getproduct.pending, (state) => {
          state.isRequest = true;
        })
        .addCase(getproduct.fulfilled, (state, action) => {
          state.isRequest = false;
          state.isSuccess = true;
          state.data = action.payload;
          state.product = state.data
        })
        .addCase(getproduct.rejected, (state, action) => {
          state.isRequest = false;
          state.isSuccess = false;
          state.errorMessage = action.payload;
        })
        
  
    },
  });
  


  export const productReducer = productSlice.reducer
  export const {resetProductState} = productSlice.actions

  export const getProductReducer = getProductSlice.reducer
  export const {resetProductIdState} = getProductSlice.actions