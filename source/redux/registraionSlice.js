import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    registerdetail:{}
}

export const getregister = createSlice({
    name:'register',
    initialState,
    reducers:{
        setregister:(state,action)=>{
            state.registerdetail = action.payload
            console.log("state role => ",state)
            return state
        }
    }
})