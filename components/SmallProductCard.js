import React from "react";
import Image from "next/image";
import Rate from "rc-rate";
import "rc-rate/assets/index.css";

export const SmallProductCard = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <Image src="/image/product1.png" width={100} height={100} />
      <div>
        <div>
          <Rate allowHalf value={3.5} disabled />
        </div>
        <h5>{props.productName}</h5>
        <span>${props.productPrice}</span>
        <span>
          <s>${props.productOriginPrice}</s>
        </span>
      </div>
    </div>
  );
};
