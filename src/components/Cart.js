import React from "react";

function Cart({ cart, dispatch }) {

  // TODO: Calculate total number of items

  // TODO: Calculate total price

  return (
    <section className="cart">

      <h2>Shopping Cart</h2>

      {/* TODO: Display total number of items */}

      {/* TODO: Display total cart price */}

      {cart.length === 0 ? (

        <p>Your cart is empty.</p>

      ) : (

        <div>

          {cart.map((item) => (

            <div className="cart-item" key={item.id}>

              <h3>{item.name}</h3>

              <p>Price: ₹{item.price}</p>

              <p>
                Quantity: {item.quantity}
              </p>

              <button>
                {/* TODO: Dispatch DECREASE */}
                -
              </button>

              <button>
                {/* TODO: Dispatch INCREASE */}
                +
              </button>

              <button>
                {/* TODO: Dispatch REMOVE */}
                Remove
              </button>

            </div>

          ))}

        </div>

      )}

    </section>
  );
}

export default Cart;
