import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
    name: 'item',
    initialState: {
        favorite : []
    },
    reducers: {
        addToFavorite(state, action) {
            const hasItem = state.favorite.findIndex((x) => x.id.toString() === action.payload.id.toString());
            if (hasItem < 0) {
                state.favorite.push(action.payload)
            }
        }
    }
})
const { actions, reducer } = itemSlice;
export const { addToFavorite } = actions;
export default reducer