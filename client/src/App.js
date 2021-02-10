import "./App.css";

import { Switch, Redirect, Route } from "react-router-dom";

import Header from "./Header";
import { PokemonDropdown, PokemonLandingPage, PokemonPage } from "./pokemon";

export { BrowserRouter, StaticRouter } from "react-router-dom";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
