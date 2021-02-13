import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchPokemon as fetchPokemonCommon,
  fetchPokemonDetail as fetchPokemonDetailCommon,
} from "react-ssr-demo-common";

const defaultInitialState = {
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

// TODO: Is there a better way than passing in the initialState?
//       preloadedState in configureStore didn't work...
export default function ssrReducer(initialState = defaultInitialState) {
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

  return pokemonSlice.reducer;
}

export const selectPokemon = (state) => state.pokemon.pokemonDetail;
export const selectAllPokemon = (state) => state.pokemon.pokemon;
