import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "30%",
        margin: "auto",
        padding: 10,
        backgroundColor: "Highlight",
        color: "white",
      }}
    >
      <NavLink className="link" to="">
        HOME
      </NavLink>
      <NavLink className="link" to="login">
        LOG IN
      </NavLink>
      <NavLink className="link" to="register">
        REGISTER
      </NavLink>
    </nav>
  );
};

export default Header;
