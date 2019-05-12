import React, { Component } from "react";

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row
} from "reactstrap";

export class LoginForm extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Form>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="username"
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
            </FormGroup>
            <Button
              onClick={() => {
                console.log("clicked");
              }}
            >
              Login
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}

export default LoginForm;
