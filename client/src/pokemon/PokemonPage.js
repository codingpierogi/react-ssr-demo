import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPokemonDetail, selectPokemon } from "./pokemonSlice";

export function PokemonPage() {
  const dispatch = useDispatch();
  const pokemon = useSelector(selectPokemon);
  const { name } = useParams();

  useEffect(() => {
    dispatch(fetchPokemonDetail(name));
  }, [name, dispatch]);

  if (!pokemon) {
    return null;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img
            src={pokemon.sprites.front_default}
            className="w-25"
            alt={`${pokemon.name} sprite`}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1 className="text-capitalize">{name}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Base Experience
              <span className="badge bg-primary rounded-pill">
                {pokemon.base_experience}
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Height
              <span className="badge bg-primary rounded-pill">
                {pokemon.height}
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Weight
              <span className="badge bg-primary rounded-pill">
                {pokemon.weight}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
