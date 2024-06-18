import React from "react";
import { Input, Form, FormGroup, Label } from "reactstrap";
import { useState } from "react";

function SearchHeader({ onSearch }) {
  const [valueInput, setValue] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSearch(valueInput);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="searchDiv">
      <Form onSubmit={handleFormSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Ne Arıyorsunuz ?</Label>
          <Input value={valueInput} onChange={handleChange} />
        </FormGroup>
      </Form>
    </div>
  );
}
export default SearchHeader;
