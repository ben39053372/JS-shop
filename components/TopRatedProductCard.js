import React from "react";
import { SmallProductCard } from "./SmallProductCard";

export const TopRatedProductCard = () => {
  return (
    <div className="card">
      <h4>Top Rated Product</h4>
      <SmallProductCard
        productName="Mixel Solid Seat Cover"
        productPrice={49.0}
        productOriginPrice={65.0}
      />
      <div style={{ borderBottom: "1px solid #0003" }} />
      <SmallProductCard
        productName="Mixel Solid Seat Cover"
        productPrice={49.0}
        productOriginPrice={65.0}
      />
      <div style={{ borderBottom: "1px solid #0003" }} />
      <SmallProductCard
        productName="Mixel Solid Seat Cover"
        productPrice={49.0}
        productOriginPrice={65.0}
      />
    </div>
  );
};
