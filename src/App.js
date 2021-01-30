import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";

import Header from "./Header";
import {
  PokemonDropdown,
  PokemonLandingPage,
  PokemonPage,
  usePokemon,
} from "./pokemon";

function App() {
  const pokemon = usePokemon();

  return (
    <Router>
      <Header dropdown={<PokemonDropdown pokemon={pokemon} />} />
      <main>
        <Switch>
          <Route path="/pokemon/:name">
            <PokemonPage />
          </Route>
          <Route path="/pokemon">
            <PokemonLandingPage pokemon={pokemon} />
          </Route>
          <Redirect from="/" to="/pokemon" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
