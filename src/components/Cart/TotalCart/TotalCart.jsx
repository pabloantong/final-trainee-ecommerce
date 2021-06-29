import React, { useContext, useEffect } from "react";
import { CartContext } from "../../../context/CartProvider";
import "./styles.css";

const TotalCart = () => {
  const { calculateTotal, totalPrice } = useContext(CartContext);
  useEffect(() => {
    calculateTotal();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {totalPrice === 0 ? null : (
        <p className="txtTotal">
          <strong>Total: </strong> ${totalPrice} CLP
        </p>
      )}
    </>
  );
};

export default TotalCart;