import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

export const SearchObjectsCard = () => {
  return (
    <div className="card">
      <h4>Search Objects</h4>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary">Button</Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};
