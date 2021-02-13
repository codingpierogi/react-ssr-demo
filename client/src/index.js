import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App, { BrowserRouter } from "./App";
import { fetchPokemon } from "./pokemon";
import pokemonReducer from "./pokemon/pokemonSlice";
import reportWebVitals from "./reportWebVitals";

if (window.__PRELOADED_STATE__) {
  console.log("Hydrating app...");
  const preloadedState = window.__PRELOADED_STATE__;
  delete window.__PRELOADED_STATE__;
  const store = configureStore({
    reducer: {
      pokemon: pokemonReducer(preloadedState),
    },
  });
  ReactDOM.hydrate(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );
} else {
  console.log("Rendering app...");
  const store = configureStore({
    reducer: {
      pokemon: pokemonReducer(),
    },
  });
  store.dispatch(fetchPokemon());
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
