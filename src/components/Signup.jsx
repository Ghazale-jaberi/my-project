import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import InputGroup from "./InputGroup";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const inputs = [
  {
    name: "name",
    label: "FullName",
    placeholder: "Enter Your Full Name",
    type: "text",
    validMsg: "Your Full Name is required",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter Your Email Address",
    type: "email",
    validMsg: "Enter a Valid Email Address",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "At leat 8 characters",
    type: "Password",
    validMsg: "At leat 8 characters",
  },
];

function Signup() {
  const [userInputs, setUserInput] = useState({});
  const [validMsgs, setValidMsgs] = useState({
    name: false,
    email: false,
    password: false,
  });

  const handleInputChange = (e) => {
    setUserInput((prevUserInputs) => ({
      ...prevUserInputs,
      [e.target.name]: e.target.value,
    }));
    switch (e.target.name) {
      case "name":
        validateName(e.target.value);
        break;
      case "email":
        validateEmail(e.target.value);
        break;
      case "password":
        validatePassword(e.target.value);
        break;
    }
  };

  const validateName = (value) => {
    setValidMsgs((prevValidMsgs) => ({
      ...prevValidMsgs,
      name: !/[A-Za-z]+\s[A-Za-z]+/i.test(value),
    }));
  };

  const validateEmail = (value) => {};
  const validatePassword = (value) => {};

  return (
    <Container>
      <Row className="mb-3">
        <Col className=" col-4 mx-auto mt-5 bg-secondary p-4 ">
          <Form.Group as={Row} controlId="formGridEmail">
            <Form.Label>Sign up</Form.Label>
            <Button variant="outline-light" type="submit">
              Sign up with Google
            </Button>
          </Form.Group>
          <hr></hr>
          <Form className="d-flex flex-column gap-3 my-3  ">
            {inputs.map((input, index) => (
              <InputGroup
                key={index}
                value={userInputs[input.name] ?? ""}
                {...input}
                showValidMsg={validMsgs[input.name]}
                onChange={handleInputChange}
              />
            ))}

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check
                type="checkbox"
                label="I agree with Terms and Privacy"
              />
            </Form.Group>
            <hr></hr>

            <Button className="lightgreen" variant="success" type="submit">
              Submit
            </Button>
          </Form>
          <hr></hr>
          <p className="text-center">Already have an account?</p>
          <p className=" text-center lightgreen ">login </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
