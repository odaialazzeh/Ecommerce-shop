import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Navbar>
      <Nav className="mr-2">
        {step1 ? (
          <LinkContainer to="/login">
            <Nav.Link>Sign In</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Sign In</Nav.Link>
        )}
      </Nav>
      <Nav className="mr-2">
        {step2 ? (
          <LinkContainer to="/shipping">
            <Nav.Link>Shipping</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Shipping</Nav.Link>
        )}
      </Nav>
      <Nav className="mr-2">
        {step3 ? (
          <LinkContainer to="/payment">
            <Nav.Link>Payment</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Payment</Nav.Link>
        )}
      </Nav>
      <Nav className="mr-2">
        {step4 ? (
          <LinkContainer to="/placeoreder">
            <Nav.Link>Place Oreder</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Place Oreder</Nav.Link>
        )}
      </Nav>
    </Navbar>
  );
};

export default CheckoutSteps;
