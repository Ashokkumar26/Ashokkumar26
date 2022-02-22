import React from "react";
import { useParams } from "react-router-dom";
export const OrderSummary = () => {
  const { products } = useParams();
  return <div>{products} Order Confirmed!</div>;
};
