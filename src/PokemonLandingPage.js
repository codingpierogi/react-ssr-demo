import { useEffect, useState } from 'react';

function PokemonLandingPage() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
   fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
    .then(response => response.json())
    .then(({results}) => setPokemon(results));
  }, []);

  return (
    <>
      <h1>Pokemon</h1>
      <div className="container">
        <div className="row">
                {pokemon.map(p => (
          <div className="col">{p.name}</div>
        ))}
        </div>
      </div>
    </>
  );
}

export default PokemonLandingPage;