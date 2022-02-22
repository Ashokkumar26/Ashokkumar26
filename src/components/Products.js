import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { styledNav } from "./NavList";
export const Products = () => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(-1)}>Back</button>
      <div>Products</div>
      <nav>
        <NavLink style={styledNav} to="featured-products">
          Featured Products
        </NavLink>
        <NavLink style={styledNav} to="new-products">
          New Products
        </NavLink>
        <Outlet />
      </nav>
    </>
  );
};
