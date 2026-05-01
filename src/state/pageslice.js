import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "dark",
}

const pageSlice = createSlice({
    name: "page",
    initialState,
    reducers:{ 
        switchmode : (state , action) =>{
            state.mode = action.payload
        }
    }
})

export const {switchmode}  = pageSlice.actions

export default pageSlice.reducer

