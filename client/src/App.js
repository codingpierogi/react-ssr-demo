import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";

import Header from "./Header";
import { PokemonDropdown, PokemonLandingPage, PokemonPage } from "./pokemon";

function App() {
  return (
    <Router>
      <Header dropdown={<PokemonDropdown />} />
      <main>
        <Switch>
          <Route path="/pokemon/:name">
            <PokemonPage />
          </Route>
          <Route path="/pokemon">
            <PokemonLandingPage />
          </Route>
          <Redirect from="/" to="/pokemon" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
