import { Dropdown } from "react-bootstrap";
import { useRouteMatch } from "react-router-dom";

export function PokemonDropdown({ pokemon }) {
  const match = useRouteMatch("/pokemon/:name");

  return (
    <Dropdown>
      <Dropdown.Toggle>Select Pokemon</Dropdown.Toggle>
      <Dropdown.Menu>
        {pokemon.map((p) => (
          <Dropdown.Item
            key={p.id}
            href={`/pokemon/${p.name}`}
            className="text-capitalize"
            active={match && match.params.name === p.name}
          >
            {p.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
