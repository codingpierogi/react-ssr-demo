const basePokeApiUrl = "https://pokeapi.co/api/v2/";
const frontDefaultSprite = (id) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

export async function fetchPokemon(limit = 50) {
  const response = await fetch(`${basePokeApiUrl}pokemon?limit=${limit}`);
  const { results } = await response.json();
  return results.map((r, i) => ({
    ...r,
    id: i + 1,
    sprite: frontDefaultSprite(i + 1),
  }));
}

export async function fetchPokemonDetail(name) {
  const response = await fetch(`${basePokeApiUrl}pokemon/${name}`);
  return await response.json();
}
