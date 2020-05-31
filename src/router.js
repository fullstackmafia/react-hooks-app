import React from "react";
import Purchase from "./components/Purchase";
import Landing from "./components/Landing";
import HomePage from "./components/HomePage";
import Daily from "./components/Daily";
import Recipe from "./components/Recipe";

const routes = {
  "/": () => <HomePage />,
  "/purchase": () => <Purchase />,
  "/landing": () => <Landing />,
  "/daily": () => <Daily />,
  "/recipe": () => <Recipe />
};

export default routes;
