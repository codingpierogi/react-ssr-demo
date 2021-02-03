import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllPokemon } from "./pokemonSlice";

export function PokemonLandingPage() {
  const pokemon = useSelector(selectAllPokemon);

  return (
    <div className="container">
      <div className="row row-cols-4 g-4">
        {pokemon.map((p) => (
          <div key={p.id} className="col">
            <div className="card">
              <img
                src={p.sprite}
                className="card-img-top"
                alt={`${p.name} sprite`}
              />
              <div className="card-body">
                <h5 className="text-capitalize">{p.name}</h5>
                <Link to={`/pokemon/${p.name}`} className="btn btn-primary">
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
