import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Login.css'
const Login = () => {
    const navigate = useNavigate();
    return (
        <div className='login-bg-img py-5'>
            <div className=" account-container container py-5 ">
                <div className=" custom-style ">
                    <h3 className='text-center mb-3 py-4'>Welcome Back</h3>
                    <Form >
                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Control type="email" className='py-2 fs-5' placeholder="Enter email"  />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control  className='py-2 fs-5' type="password" placeholder="Password"  />
                        </Form.Group>
                        
                        <Button variant="primary" type="submit" className='w-100 fs-5'>
                            Login
                        </Button>
                    </Form>
                    <div className='d-flex mt-2'>
                        <p><button className='btn btn-link text-primary fw-bold ps-0 pe-5 text-decoration-none'  >Forget Password</button> </p>
                        
                    </div>
                    <p className='toggle-page py-2 '>
                        New to Camera House ?{" "}
                        <span onClick={() => navigate("/signup")}>Create New Account</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;