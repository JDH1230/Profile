import { configureStore, createSlice } from "@reduxjs/toolkit";
import data from "./data";
const DramaMember = createSlice({
    name:'DramaMember',
    initialState : data,
    
});


const store = configureStore ({
    reducer : {
        DramaMember : DramaMember.reducer
    }
});

export default store;