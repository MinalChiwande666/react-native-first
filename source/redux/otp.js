
import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    otp:''
}
export const otpget = createSlice({
    name:'otpverify',
    initialState,
    reducers:{
        setotpverify:(state,action)=>{
            // state.otp = action.payload
            console.log(state.otp, "otp state")
            return state
        },
        setlogout:(state,action)=>{
          state.otp = action.payload
          console.log("state active check => ", state)
        // return state
        }
    }
})