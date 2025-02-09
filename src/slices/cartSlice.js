import {createSlice} from '@reduxjs/toolkit';
import {toast} from "react-hot-toast";

const initialState= {
    totalItems : localStorage.getItem("totalItems") ? JSON.parse(localStorage.getItem("totalItems")) : 0,
}

const cartSlice = createSlice({
    name:"cart",
    initialState: initialState,
    reducers:{
        setTotalItems(state,value){
            state.user = value.payload;
          },
          //addto cart
          //remove item
          //resetcart
    },
});

export const {setToken} = cartSlice.actions;
export default cartSlice.reducer;