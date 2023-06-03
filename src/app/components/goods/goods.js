import React from "react";
import "./goods.css";

const Goods = ({ item }) => {
  const { name, price } = item;
  return (
    <div className="goods">
      <img alt="foto" />
      <div>{`${name} - ${price}$`}</div>
      <button>Add to Cart </button>
    </div>
  );
};

export default Goods;
