import React, { useState } from "react";
import styles from "../styles/ProductCard.module.css";
import { ButtonGroup, Button } from "react-bootstrap";
import Image from "next/image";
import { FaApple } from "react-icons/fa";

export const ProductCard = (props) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className={styles.productCard}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div style={{ position: "relative" }}>
        <Image
          src={props.src || "/image/product1.png"}
          layout="responsive"
          width="600"
          height="700"
        />
        {isHover && (
          <ButtonGroup className={styles.hoverItem} style={{ zIndex: 1 }}>
            <Button>left</Button>
            <Button>
              <FaApple />
            </Button>
            <Button>right</Button>
          </ButtonGroup>
        )}
        <div className="textAlignContainer">
          <p>star</p>
          <a>
            <h3>{props.name || "Product Name"}</h3>
          </a>
          <div style={{ flexDirection: "row" }}>
            <span>price/</span>
            <span>origin price</span>
          </div>
        </div>
      </div>
    </div>
  );
};
