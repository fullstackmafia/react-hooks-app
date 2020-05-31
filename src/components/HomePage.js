import React from "react";
import { A } from "hookrouter";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome everyone! Have some beer!</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button>
          <A style={{ textDecoration: "none" }} href="/landing">
            View our collection
          </A>
        </button>
        <button>
          <A style={{ textDecoration: "none" }} href="/purchase">
            Buy some Beer
          </A>
        </button>
        <button>
          <A style={{ textDecoration: "none" }} href="/daily">
            consumption gauge
          </A>
        </button>
        <button>
          <A style={{ textDecoration: "none" }} href="/recipe">
            Make a Recipe
          </A>
        </button>
      </div>
    </div>
  );
}
