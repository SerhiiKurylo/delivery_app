import React from "react";
import Goods from "../goods";
import "./goods-list.css";

const goodsArray = [
  { id: 1, name: "Big burger", price: 79 },
  { id: 2, name: "Small burger", price: 49 },
  { id: 3, name: "Burito", price: 68 },
  { id: 4, name: "Nagets", price: 118 },
  { id: 5, name: "Donate with cherry", price: 55 },
  { id: 6, name: "Donate with choco", price: 55 },
  { id: 7, name: "Grill meat", price: 155 },
  { id: 8, name: "Fish roll", price: 86 },
];

const GoodsList = () => {
  const elements = goodsArray.map((item) => {
    return (
      <div key={item.id} className="goods-cart">
        <Goods item={item} />
      </div>
    );
  });

  return <div className="goods-list">{elements}</div>;
};

export default GoodsList;
