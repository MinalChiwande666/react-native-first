import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    address:'',
    
}

export const addslice = createSlice({
    name:'address',
    initialState,
    reducers:{
        setaddess:(state,action)=>{
            state.address = action.payload
            console.log("state =>",state)
            return state
        }
    }
})