import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, removeItem, addItem } from "../CartSlice";

const CartItem = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleIncrease = (item) => {
    dispatch(updateQuantity({ name: item.name, amount: item.quantity + 1 }));
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, amount: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (name) => {
    dispatch(removeItem(name));
  };

  return (
    <div className="cart-items">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.name} className="cart-item">
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>

            <button onClick={() => handleIncrease(item)}>+</button>
            <button onClick={() => handleDecrease(item)}>-</button>
            <button onClick={() => handleRemove(item.name)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default CartItem;
