import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
    name: "home",
    initialState: {
        url: {},
        genres: {}
    },
    
    reducers: {
        getApiConfiguration: (state, action) => {
            state.url = action.payload;
        },//for url
        getGenres: (state, action) => {
            state.genres = action.payload
        }//for genres
    },
});

export const {getApiConfiguration,getGenres}=homeSlice.actions;
export default homeSlice.reducer;