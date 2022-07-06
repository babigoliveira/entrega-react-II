import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
Renderizando 2x por conta do strict mode ligado
https://stackoverflow.com/a/60619061
*/
