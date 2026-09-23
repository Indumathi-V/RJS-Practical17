import React, { useReducer } from "react";
import cartReducer from "./reducer";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000
  },
  {
    id: 2,
    name: "Headphones",
    price: 2000
  },
  {
    id: 3,
    name: "Keyboard",
    price: 1500
  }
];

function App() {

  // TODO: Create the initial cart state

  // TODO: Use useReducer with cartReducer

  return (
    <div className="container">

      <h1>Shopping Cart</h1>

      {/* TODO: Pass products and dispatch to ProductList */}

      {/* TODO: Pass cart and dispatch to Cart */}

    </div>
  );
}

export default App;
