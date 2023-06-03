import React from "react";
import "./shop-list.css";
import Shop from "../shop";

const shopArray = [
  { id: 1, name: "MC Donny" },
  { id: 2, name: "CFK" },
  { id: 3, name: "Donate" },
  { id: 4, name: "Grills" },
];

const ShopList = () => {
  const elements = shopArray.map((item) => {
    return (
      <div key={item.id}>
        <Shop name={item.name} />
      </div>
    );
  });
  return <div className="shop-list">{elements}</div>;
};

export default ShopList;
