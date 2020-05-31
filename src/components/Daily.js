import React from "react";
import { A } from "hookrouter";
import { useArray } from "react-hanger";

const myStyle = {
  color: "white"
};
export default function App() {
  const todos = useArray(["35cl", "50cl", "60cl"]);
  return (
    <div style={myStyle}>
      <h3>Measures</h3>
      <button>
        <A style={{ textDecoration: "none" }} href="/">
          HOME
        </A>{" "}
        <br />
      </button>
      <button
        onClick={() =>
          todos.add(Math.floor(Math.random() * (60 - 35 + 1)) + 35 + "cl")
        }
      >
        CUSTOM
      </button>

      <ul>
        {todos.value.map((todo, i) => (
          <div>
            <li key={i}>{todo}</li>
            <button onClick={() => todos.removeIndex(i)}>
              Remove from list
            </button>
          </div>
        ))}
      </ul>
      <button onClick={todos.clear}>clear</button>
    </div>
  );
}