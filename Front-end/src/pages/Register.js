import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from 'react-router-dom';
import { login, register } from '../service/auth.service';
import { useState } from 'react';

function Register() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [f_name, setFName] = useState('');
  const [l_name, setLName] = useState('');

  const navigate = useNavigate();
  async function handleSubmit(event) {

    event.preventDefault();
    const data = {
      email: email,
      password: password,
      first_name:f_name,
      last_name:l_name
    }

    const res = await register(data);
    console.log(res.first_name);

    if(res){
        navigate('/login');
    }

  }

  return (
    <Container fluid style={{background:"antiquewhite", padding: "24px", height:"1200px", paddingTop: "200px"}}>
    <Row>
        <Col></Col>
        <Col>
          <h2 style={{color:"black"}}>Register</h2>
        </Col>
        <Col></Col>
      </Row>
    <Row>
        <Col>
        </Col>
      <Col>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First name</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={e => setFName(e.target.value)}/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Laste name</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={e => setLName(e.target.value)}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" onClick={handleSubmit}>
        Submit
      </Button>
    <Link to= "/login">already have an account</Link>
    </Form>
      </Col>
      <Col>
      </Col>
    </Row>
  </Container>
    
  );
}

export default Register;