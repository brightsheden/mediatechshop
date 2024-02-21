import { configureStore } from '@reduxjs/toolkit';
import { loginReducer, registerReducer } from './Slice/AuthSlice';
import { getProductReducer, productReducer } from './Slice/ProductSlice';

const store = configureStore({
    reducer:{

        user:loginReducer,
        register:registerReducer,
        product:productReducer,
        productDetail:getProductReducer
    }
})

export default store;