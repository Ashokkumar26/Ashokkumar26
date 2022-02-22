import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./profile/auth";
export const styledNav = ({ isActive }) => {
  return {
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: "none",
    padding: "40px 10px",
  };
};
export const NavList = () => {
  const { user } = useAuth();
  return (
    <nav>
      <NavLink style={styledNav} to="/">
        Home
      </NavLink>
      <NavLink style={styledNav} to="about">
        About
      </NavLink>
      <NavLink style={styledNav} to="products">
        Products
      </NavLink>
      <NavLink style={styledNav} to="profile">
        Profile
      </NavLink>
      {!user && (
        <NavLink style={styledNav} to="login">
          Login
        </NavLink>
      )}
    </nav>
  );
};
