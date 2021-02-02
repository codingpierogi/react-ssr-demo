import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "../pokemon/pokemonSlice";

export default configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});
