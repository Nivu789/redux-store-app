import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        add(state,action){
            const index = state.findIndex(item=>item.id===action.payload.id)
            if(index==-1){
                state.push(action.payload)
            }else{
                alert("Item already present in cart")
            }
            
        },
        remove(state,action){
            return state.filter(item=>item.id!==action.payload)
        }
    }
})

export const {add,remove} = cartSlice.actions
export default cartSlice.reducer
