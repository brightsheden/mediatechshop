import { createAsyncThunk} from "@reduxjs/toolkit";

export const products = createAsyncThunk('product/allproducts', async ({ rejectWithValue }) => {
    
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
