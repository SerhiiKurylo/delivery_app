import React from "react";
import Header from "../../header";
import ShopList from "../../shops-list";
import GoodsList from "../../goods-list";
import "./shops.css";

const Shops = () => {
  return (
    <>
      <div className="shop-container">
        <Header />
        <div className="shop-body-container">
          <ShopList />
          <GoodsList />
        </div>
      </div>
    </>
  );
};

export default Shops;
