import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import animeReducer from "../reducers/anime.reducer";

const rootReducer = combineReducers({ anime: animeReducer });

const store = configureStore({
  reducer: {
    rootReducer,
  },
});

export default store;
