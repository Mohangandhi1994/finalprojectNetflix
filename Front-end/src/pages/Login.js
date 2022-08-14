import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import { login } from "../service/auth.service";

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  async function handleSubmit(event) {

    event.preventDefault();
    console.log('email=>>>>', email);
    console.log('password=>>>>', password);

    const data = {
      email: email,
      password: password
    }

    const res = await login(data);

    console.log(res);
    if(res.token){
      localStorage.setItem('token', res.token);
      localStorage.setItem('user_name', res.user.first_name);
      localStorage.setItem('user', JSON.stringify(res.user))
      navigate('/netflix-show')
    }

  }

  return (
    <Container
      fluid
      style={{
        background: "antiquewhite",
        padding: "24px",
        height: "1200px",
        paddingTop: "200px",
      }}
    >
      <Row>
        <Col></Col>
        <Col>
          <h2 style={{color:"black"}}>Login</h2>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" autoComplete="on"   onChange={e => setPassword(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
            <Link to="/register"> don't have an account REGISTER NOW</Link>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Login;
