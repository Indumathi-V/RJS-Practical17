import React from "react";

function ProductList({ products, dispatch }) {

  return (
    <section>
      <h2>Products</h2>

      <div className="products">

        {products.map((product) => (

          <div className="product" key={product.id}>

            <h3>{product.name}</h3>

            <p>Price: ₹{product.price}</p>

            <button
              // TODO: Dispatch ADD action
            >
              Add to Cart
            </button>

          </div>

        ))}

      </div>
    </section>
  );
}

export default ProductList;
