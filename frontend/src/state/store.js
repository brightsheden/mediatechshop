import { configureStore } from '@reduxjs/toolkit';
import { loginReducer, registerReducer } from './Slice/AuthSlice';
import { productReducer } from './Slice/ProductSlice';

const store = configureStore({
    reducer:{

        user:loginReducer,
        register:registerReducer,
        products:productReducer
    }
})

export default store;