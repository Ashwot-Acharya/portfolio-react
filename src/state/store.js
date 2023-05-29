import { configureStore } from '@reduxjs/toolkit'
import pageReducer from "./pageslice"

const store = configureStore({
    reducer: {
        page : pageReducer
    },
})



export default store
