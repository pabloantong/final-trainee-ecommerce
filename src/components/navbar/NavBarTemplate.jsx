import React, { useEffect } from "react";
import "./styles.css";
import CartIcon from "../icons/CartIcon/CartIcon";
import WebLogo from "../icons/WebLogo/WebLogo";
import { NavLink } from "react-router-dom";

const NavbarTemplate = () => {
  
    useEffect(() => {
      document.querySelector(".hamburger").addEventListener("click", function () {
        document.querySelector(".nav-items").classList.toggle("show");
        document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("fade"));
      });
      const header = document.querySelector(".menu-nav");
      window.onscroll = function () {
        const top = window.scrollY;
        top >= 50
          ? header.classList.add("active")
          : header.classList.remove("active");
      };
  
      document.querySelectorAll(".nav-item").forEach(element => {
        element.addEventListener("click", function () {
          document.querySelector(".nav-items").classList.remove("show");
          document.querySelector(".iconMenu").checked = false;
        });
      });
    });

    return (
      <nav className="menu-nav animate__animated animate__slideInDown animate__delay-0.8s">
        <div className="hamburger">
          <input type="checkbox" className="iconMenu" />
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <WebLogo/>
        <ul className="nav-items nav-items-center">
          <li className="nav-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </ul>
        <CartIcon/>
      </nav>
    );
  };
  
  export default NavbarTemplate;