import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchPokemon as fetchPokemonCommon,
  fetchPokemonDetail as fetchPokemonDetailCommon,
} from "react-ssr-demo-common";

const initialState = {
  pokemon: [],
  pokemonDetail: null,
};

export const fetchPokemon = createAsyncThunk(
  "pokemon/fetchPokemon",
  fetchPokemonCommon
);

export const fetchPokemonDetail = createAsyncThunk(
  "pokemon/fetchPokemonDetail",
  fetchPokemonDetailCommon
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPokemon.fulfilled]: (state, action) => {
      state.pokemon = action.payload;
    },
    [fetchPokemonDetail.fulfilled]: (state, action) => {
      state.pokemonDetail = action.payload;
    },
  },
});

export default pokemonSlice.reducer;

export const selectPokemon = (state) => state.pokemon.pokemonDetail;
export const selectAllPokemon = (state) => state.pokemon.pokemon;
