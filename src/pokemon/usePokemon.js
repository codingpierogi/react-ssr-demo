import { useEffect, useState } from "react";

const basePokeApiUrl = "https://pokeapi.co/api/v2/";
const frontDefaultSprite = (id) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

export function usePokemon(limit = 50) {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await fetch(`${basePokeApiUrl}pokemon?limit=${limit}`);
      const { results } = await res.json();
      setPokemon(
        results.map((r, i) => ({
          ...r,
          id: i + 1,
          sprite: frontDefaultSprite(i + 1),
        }))
      );
    };

    fetchPokemon();
  }, [limit]);

  return pokemon;
}

export function usePokemonDetail(name) {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await fetch(`${basePokeApiUrl}pokemon/${name}`);
      const data = await res.json();
      setPokemon(data);
    };

    if (name) {
      fetchPokemon();
    }
  }, [name]);

  return pokemon;
}
