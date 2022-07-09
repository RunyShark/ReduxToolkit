import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ReduxApp, PokemonApp, store } from "./index";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PokemonApp />
    </Provider>
  </React.StrictMode>
);
