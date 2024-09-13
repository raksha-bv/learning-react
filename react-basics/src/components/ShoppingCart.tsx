import React from "react";
import Like from "./Like";

interface Props {
  cartItems: string[];
  onClear: () => void;
}

const ShoppingCart = ({ cartItems, onClear }: Props) => {
  return (
    <div>
      {cartItems.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={onClear}>Clear Cart</button>
    </div>
  );
};

export default ShoppingCart;
