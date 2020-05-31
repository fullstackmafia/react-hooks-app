import React, { useReducer } from "react";
import { A } from "hookrouter";

const myStyle = {
  color: "white",
  fontSize: "20px"
};

export default function Recipe() {
  const initialState = {
    RecipePrice: 0,
    recipe: {
      price: 27,
      name: "Oompa Loompa 1915 Recipe",
      image:
        "https://res.cloudinary.com/fullstackmafia/image/upload/v1568016744/20110111-132155-Homebrew-Grain_uihhas.jpg",
      ingredients: []
    },
    stockpile: [
      { id: "1", name: "Extra Pale Malt", price: 10 },
      { id: "2", name: "Ahtanum Hops", price: 6 },
      { id: "3", name: "Wyeast 1056", price: 8 },
      { id: "4", name: "Chinook", price: 5 }
    ]
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "REMOVE_ITEM":
        return {
          ...state,
          RecipePrice: state.RecipePrice - action.item.price,
          recipe: {
            ...state.recipe,
            ingredients: state.recipe.ingredients.filter(
              y => y.id !== action.item.id
            )
          },
          stockpile: [...state.stockpile, action.item]
        };
      case "ADD_ITEM":
        return {
          ...state,
          RecipePrice: state.RecipePrice + action.item.price,
          recipe: {
            ...state.recipe,
            ingredients: [...state.recipe.ingredients, action.item]
          },
          stockpile: state.stockpile.filter(x => x.id !== action.item.id)
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const removeFeature = item => {
    dispatch({ type: "REMOVE_ITEM", item });
  };

  const addItem = item => {
    dispatch({ type: "ADD_ITEM", item });
  };

  return (
    <div className="boxes" style={myStyle}>
      <div className="box">
        <figure>
          <button>
            <A style={{ textDecoration: "none" }} href="/">
              HOME
            </A>{" "}
            <br />
          </button>
          <img width={"300px"} src={state.recipe.image} alt="my recipe" />
        </figure>
        <h2>{state.recipe.name}</h2>
        <pre>Amount: ${state.recipe.price}</pre>
        <div className="content">
          <h5>Added ingredients:</h5>
          {state.recipe.ingredients.length ? (
            <ol type="1">
              {state.recipe.ingredients.map(item => (
                <li key={item.id}>
                  <button
                    onClick={() => removeFeature(item)}
                    className="button"
                  >
                    REMOVE FROM LIST
                  </button>
                  {item.name}
                </li>
              ))}
            </ol>
          ) : (
            <pre>You can purchase items from the stockpile.</pre>
          )}
        </div>
      </div>
      <div className="box">
        <div className="content">
        <h4>Ingredient Stockpile</h4>
          {state.stockpile.length ? (
            <ol type="1">
              {state.stockpile.map(item => (
                <li key={item.id}>
                  <button onClick={() => addItem(item)} className="button">
                    ADD TO LIST
                  </button>
                  {item.name} (+{item.price})
                </li>
              ))}
            </ol>
          ) : (
            <pre>Nice looking recipe!</pre>
          )}
        </div>

        <div className="content">
          <h4>Total Amount: ${state.recipe.price + state.RecipePrice}</h4>
        </div>
      </div>
    </div>
  );
}
