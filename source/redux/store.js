import { configureStore } from "@reduxjs/toolkit";
import { addslice } from "./addressSlice";
import { cart } from "./addcartSlice";
import { otpget } from "./otp";
import { getregister } from "./registraionSlice";

export const store = configureStore({
    reducer:{
        address:addslice.reducer,
        addcart:cart.reducer,
        phoneotp:otpget.reducer,
        register:getregister.reducer
    }
})