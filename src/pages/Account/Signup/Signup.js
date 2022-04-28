import React from 'react';
import {  useNavigate } from 'react-router-dom';
import './Signup.css'
import { Button, Form } from 'react-bootstrap';

const Signup = () => {
    const navigate = useNavigate()

    
    return (
        <div className='login-bg-img py-5'>
            <div className="account-container container py-5 ">
                <div className=" text-light custom-style ">
                    <h3 className='text-center pb-3'>Hello There,</h3>
                    <h5 className='text-center pb-3'>Register now to Stay With us</h5>

                    <Form >
                        <Form.Group className="mb-3 " controlId="formBasicUsername">
                            <Form.Control type="name"  className='py-2' name='name' placeholder="Enter name" />
                        </Form.Group>
                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Control type="email"  className='py-2' name='email' placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password"  className='py-2' name='password' placeholder="Password" />
                        </Form.Group>
                        <Button  variant="primary" type="submit" className='w-100 fs-5'>
                            Register
                        </Button>
                    </Form>
                    <p className='toggle-page pt-2'>
                        Already have an account  ?{" "}
                        <span onClick={() => navigate("/login")}>Please Login</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;