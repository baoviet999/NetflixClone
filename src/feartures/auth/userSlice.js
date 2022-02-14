import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../api/userApi";

export const register = createAsyncThunk("user/register", async (payload) => {
    const response = await userApi.register(payload);
    localStorage.setItem("jwt", response.jwt);
    localStorage.setItem("user", JSON.stringify(response.user));
    return response.user;
});

const userSlice = createSlice({
    name: "user",
    initialState: {
        current: {},
        setting: {},
    },
    reducers: {},
    extraReducers: {
        [register.fulFilled]: (state, action) => {
            state.current = action.payload;
        },
    },
});

const { actions, reducer } = userSlice;
export default reducer;
