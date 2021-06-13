import React from "react";
import { Row, Col, Container } from "react-bootstrap";

export default () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={4} style={{ backgroundColor: "#0009" }}>
            <div>
              Card 1Card 1Card 1Card 1Card 1Card 1Card 1Card 1Card 1Card 1Card
              1Card 1Card 1Card 1Card 1Card 1
            </div>
            <div>Card 2</div>
            <div>Card 3</div>
          </Col>
          <Col xs={8} style={{ backgroundColor: "#0005" }}>
            2
          </Col>
        </Row>
      </Container>
    </div>
  );
};
