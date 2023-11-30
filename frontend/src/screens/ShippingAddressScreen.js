import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Form from "react-bootstrap/Form";

export default function ShippingAddressScreen() {
  const [fullName, setFullName] = useState("");
  const [address, setAdress] = useState("");
  const [city, setCity] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Helmet>
        <title>Shipping Address</title>
      </Helmet>
      <h1 className="my-3">Shipping Address</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="fullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            value={address}
            onChange={(e) => setAdress(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </Form.Group>
      </Form>
    </div>
  );
}
