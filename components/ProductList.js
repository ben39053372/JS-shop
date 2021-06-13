import React, { useState } from "react";
import { ProductCard } from "../components/ProductCard";

import { Pagination, Row, Col } from "react-bootstrap";

export const ProductList = () => {
  const [page, setPage] = useState(0);
  const items = new Array(10).fill(0).map((value, i) => {
    return (
      <Pagination.Item activeLabel={null} key={i} active={i === page}>
        {i}
      </Pagination.Item>
    );
  });

  const products = new Array(15).fill(0);

  return (
    <div>
      <div>{/* header */}</div>

      <div>
        <Row>
          <Col xs={4}>
            <ProductCard name="abc" src="/image/cbd_oil.png" />
          </Col>
          <Col xs={4}>
            <ProductCard />
          </Col>

          {products.map((item, i) => {
            return (
              <Col key={i} xs={4}>
                <ProductCard />
              </Col>
            );
          })}
        </Row>
      </div>
      <div>
        <Pagination>{items}</Pagination>
        {/* footer */}
      </div>
    </div>
  );
};
