import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  list: [],
  detailAnime: {},
  isLoading: false,
};

export const fetchTopAnimeList = createAsyncThunk(
  "anime/getTopAnime",
  async () => {
    const rs = await axios.get("https://api.jikan.moe/v4/top/anime");
    const data = await rs.data;
    return data;
  }
);

export const fetchDetailAnime = createAsyncThunk(
  "anime/getDetailAnime",
  async (mal_id) => {
    const rs = await axios.get(`https://api.jikan.moe/v4/anime/${mal_id}/full`);
    const data = await rs.data;
    return data;
  }
);

const animeReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchTopAnimeList.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchTopAnimeList.fulfilled, (state, action) => {
      state.isLoading = false;
      const animeListData = action.payload.data;
      state.list = animeListData;
    })
    .addCase(fetchTopAnimeList.rejected, (state, action) => {
      console.error(action);
    })
    .addCase(fetchDetailAnime.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchDetailAnime.fulfilled, (state, action) => {
      state.isLoading = false;
      const detailAnimeData = action.payload.data;
      state.detailAnime = detailAnimeData;
    })
    .addCase(fetchDetailAnime.rejected, (state, action) => {
      console.error(action);
    });
});

export default animeReducer;
