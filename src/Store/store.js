import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "../components/MovieList/itemSlice"
import userReducer from "../feartures/auth/userSlice"
const store = configureStore({
    reducer: {
        item: itemReducer,
        user : userReducer,
    }
})
export default store