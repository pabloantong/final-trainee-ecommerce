import React, { useState, useEffect } from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";
import ItemsCart from "./ItemsCart/ItemsCart";

const Cart = () => {
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("itemsCart"));
    setListItems(items);
  }, []);
  return (
    <div className="container">
      <div className="row no-gutters pt-25vh mb-5 animate__animated animate__fadeInDown animate__delay-1s">
        {listItems.length === 0 ? (
          <div className="col-12 mb-3">
            <h5 className="text-center">THERE'S NO ITEMS IN YOUR CART.</h5>
            <NavLink to="/bands" className="btn-default">
              Return to Home
            </NavLink>
          </div>
        ) : (
          <ItemsCart listItems={listItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;