import React from "react";
import ReactDOM from "react-dom";
import { useRoutes } from "hookrouter";
import routes from "./router";
import "./styles.css";
// import { NoPageFound } from "./components/NoPageFound";

function App() {
  const routeResult = useRoutes(routes);
  return <div>{routeResult}</div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
