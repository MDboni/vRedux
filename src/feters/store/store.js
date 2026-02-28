import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counters/counterSlice.js";

const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})

export default store;