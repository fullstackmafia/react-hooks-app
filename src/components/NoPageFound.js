import React from "react";

export const NoPageFound = () => {
  return (
    <div>
         <button>
        <A style={{ textDecoration: "none" }} href="/">
          HOME
        </A>{" "}
        <br />
      </button>
      {" "}
      <h1>404</h1> <p>Page doesn't exist</p>
    </div>
  );
};
