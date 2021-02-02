import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  pokemon: [],
  pokemonDetail: null,
};

const basePokeApiUrl = "https://pokeapi.co/api/v2/";
const frontDefaultSprite = (id) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

export const fetchPokemon = createAsyncThunk(
  "pokemon/fetchPokemon",
  async (limit) => {
    const response = await fetch(`${basePokeApiUrl}pokemon?limit=${limit}`);
    const { results } = await response.json();
    return results.map((r, i) => ({
      ...r,
      id: i + 1,
      sprite: frontDefaultSprite(i + 1),
    }));
  }
);

export const fetchPokemonDetail = createAsyncThunk(
  "pokemon/fetchPokemonDetail",
  async (name) => {
    const response = await fetch(`${basePokeApiUrl}pokemon/${name}`);
    return await response.json();
  }
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
