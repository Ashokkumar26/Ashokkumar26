import React from "react";
import { useNavigate } from "react-router-dom";
export const PlaceOrder = () => {
  const navigate = useNavigate();
  return <button onClick={() => navigate("order-summary")}>Place Order</button>;
};
