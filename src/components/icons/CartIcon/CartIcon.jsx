import React, { useContext, useEffect } from 'react';
import './styles.css';
import { CartContext } from '../../../context/CartProvider';
import { NavLink } from "react-router-dom";


const CartIcon = () => {

     const { countCart, quantityTotal } = useContext(CartContext)

     useEffect(() => {
          quantityTotal()
          // eslint-disable-next-line
     }, [])

     return (
          <NavLink to="/cart" className="cart">
               <i className="fas fa-shopping-cart"></i>
               <span className="countItems">{ countCart }</span>
          </NavLink>
     )
}

export default CartIcon;