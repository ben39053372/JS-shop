import React, { useState } from "react";
import styles from "../styles/BlogCard.module.css";
import { ButtonGroup, Button, Card } from "react-bootstrap";
import Image from "next/image";
import { FaApple } from "react-icons/fa";

export const BlogCard = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Card style={{ margin: "0 20px" }}>
      <Card.Img variant="top" src="/image/blog1.jpg" />
      <Card.Body>
        <Card.Subtitle style={{ color: "#FFB400" }}>
          Card Subtitle
        </Card.Subtitle>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};
