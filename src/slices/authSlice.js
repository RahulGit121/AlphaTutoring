import {createSlice} from '@reduxjs/toolkit';

const initialState= {
    // for checking local storage of login data, if the page was closed then after reopen the page we can still logged in, thats why we are checking the intial phase

    token : localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
}

const authSlice = createSlice({
    name:"auth",
    initialState: initialState,
    reducers:{
        setToken(state,value){
            state.token = value.payload;
          },
    },
});

export const {setToken} = authSlice.actions;
export default authSlice.reducer;