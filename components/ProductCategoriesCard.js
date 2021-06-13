import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const ListItem = (props) => {
  return (
    <div style={{ display: "flex", flex: 1, justifyContent: "space-between" }}>
      <Link href={props.url}>
        <a>{props.name}</a>
      </Link>
      <BsArrowRight color="#00f9" />
    </div>
  );
};

export const ProductCategoriesCard = () => {
  return (
    <div className="card" style={{ padding: 10 }}>
      <h4>Product Categories</h4>
      <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
        <li>
          <ListItem url="" name="All Category" />
        </li>
        <li>
          <ListItem url="" name="Bared Oil" />
        </li>
        <li>
          <ListItem url="" name="Body Oil" />
        </li>
        <li>
          <ListItem url="" name="Hair Oil" />
        </li>
        <li>
          <ListItem url="" name="Grooming Tools" />
        </li>
        <li>
          <ListItem url="" name="Uncategorized" />
        </li>
      </ul>
    </div>
  );
};
