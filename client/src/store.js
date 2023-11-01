import { configureStore } from "@reduxjs/toolkit";

import courseSlice from "./_features/courseSlice";
import performanceSlice from "./_features/performanceSlice";
import userReducer from './_features/userSlice';

export const store = configureStore({
    reducer:{
        user: userReducer,
        courses: courseSlice,
        performance: performanceSlice
    }
})