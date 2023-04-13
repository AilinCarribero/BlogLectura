import { createSlice } from "@reduxjs/toolkit";

export const narrativasSlice = createSlice({
    name: 'narrativas',
    initialState: {
        narrativas: []
    },
    reducers: {
        setNarrativas: (state, action) => {
            state.narrativas = action.payload;
        }
    }
});

export const { setNarrativas } = narrativasSlice.actions;

export default narrativasSlice.reducer;