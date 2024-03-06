import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:'product',
    initialState:{
        data:[]
    },
    reducers:{
        fetchProducts(state,action){
            state.data = action.payload
        }
    }
})

export default productSlice.reducer
export const {fetchProducts} = productSlice.actions

export function getProducts(){
    return async function getProductsThunk(dispatch){
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        dispatch(fetchProducts(data))
    }
}