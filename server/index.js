import { configureStore } from "@reduxjs/toolkit";
import express from "express";
import fetch from "node-fetch";
import path from "path";
import { renderToString } from "react-dom/server.js";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { fetchPokemon, fetchPokemonDetail } from "react-ssr-demo-common";
import App, { StaticRouter } from "../client/src/App.js";
import pokemonReducer from "../client/src/pokemon/pokemonSlice.js";
import { createTemplate } from "./template.js";

const build = path.join("../client/build");
const template = createTemplate(path.join(build, "index.html"));

globalThis.fetch = fetch;

const app = express();

app.use(express.static(build));

app.get("/", function (req, res) {
  res.redirect("/pokemon");
});

app.get("/pokemon/:name", async (req, res) => {
  const [pokemon, pokemonDetail] = await Promise.all([
    fetchPokemon(),
    fetchPokemonDetail(req.params.name),
  ]);
  const preloadedState = { pokemon, pokemonDetail };
  const store = configureStore({
    reducer: {
      pokemon: pokemonReducer(preloadedState),
    },
  });
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        <App />
      </StaticRouter>
    </Provider>
  );
  template.render(html, preloadedState);
  res.sendFile("index.html", { root: build });
});

app.get("/pokemon", async (req, res) => {
  const pokemon = await fetchPokemon();
  const preloadedState = { pokemon };
  const store = configureStore({
    reducer: {
      pokemon: pokemonReducer(preloadedState),
    },
  });
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        <App />
      </StaticRouter>
    </Provider>
  );
  template.render(html, preloadedState);
  res.sendFile("index.html", { root: build });
});

app.listen(5000);
