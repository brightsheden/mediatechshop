import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const products = createAsyncThunk('product/allproducts', async (_,{ rejectWithValue }) => {
    
    try {
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        

        const { data } = await axios.get(
            'http://127.0.0.1:8000/api/product/products/',
        
            
            config
        );



     
        
     
        
        
    
        return data;

        

    } catch (error) {
        return rejectWithValue(error.message);
    }
});


export const getproduct = createAsyncThunk('product/getproduct', async (id,{ rejectWithValue }) => {
    
    try {
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        

        const { data } = await axios.get(
           ` http://127.0.0.1:8000/api/product/${id}/`,
        
            
            config
        );



     
        
     
        
        
    
        return data;

        

    } catch (error) {
        return rejectWithValue(error.message);
    }
});
