import express from "express";
import fetch from "node-fetch";
import path from "path";
//import React from "react";
import { renderToString } from "react-dom/server.js";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { fetchPokemon, fetchPokemonDetail } from "react-ssr-demo-common";
import App, {StaticRouter} from "../client/src/App.js";
import pokemonReducer from "../client/src/pokemon/pokemonSlice.js";

const build = path.join("../client/build");

globalThis.fetch = fetch;

const app = express();

app.use(express.static(build));

app.get("/pokemon/:name", async (req, res) => {
  const [pokemon, pokemonDetail] = await Promise.all([fetchPokemon(), fetchPokemonDetail(req.params.name)]);
  //const preloadedState = { pokemonDetail };
  const store = createStore(pokemonReducer, {pokemon, pokemonDetail});
  //console.log(pokemon);
  console.log('STORE', store.getState());
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </Provider>
  );

  console.log(`/pokemon/${req.params.name}`);
  console.log(html);

  res.sendFile("index.html", { root: build });
});

app.get("/*", function (req, res) {
  res.sendFile("index.html", { root: build });
});

app.listen(5000);

const renderPage = () => {
  console.log("renderPage");
  const indexFile = path.join(build, "index.html");
  console.log(indexFile);
};
