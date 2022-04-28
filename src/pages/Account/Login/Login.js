import React, { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {  useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.init';
import './Login.css'
import toast from 'react-hot-toast';
import Loading from '../../../components/Loading/Loading';
import { Button, Form } from 'react-bootstrap';
import SocialAccount from '../SocialAccount/SocialAccount';


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState({ value: "", error: "" })
    const [password, setPassword] = useState({ value: "", error: "" })
    const emailRef = useRef('');

    //navigate
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    //react-firebase-hooks
    const [signInWithEmailAndPassword, user, loading, loginError] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

    
    //handle email
    const handleEmail = event => {
        const emailValue = event.target.value
        if (/\S+@\S+\.\S+/.test(emailValue)) {
            setEmail({ value: emailValue, error: "" });
        } else {
            setEmail({ value: "", error: "Please Provide a valid Email" });
        }
    }

    //handle password
    const handlePassword = event => {
        const passwordValue = event.target.value
        if (passwordValue.length < 6) {
            setPassword({ value: "", error: "Password not match" });
        }
        else if (!/(?=.*[A-Z])/.test(passwordValue)) {
            setPassword({
                value: "", error: "Password not match",
            });
        }
        else {
            setPassword({ value: passwordValue, error: "" });
        }
    }

    // navigate 
    if (user) {
        toast.success(`Welcome Back To Warehouse`, { id: "welcome" });
        navigate(from, { replace: true });
    }

    //loading handle
    if(sending){
        return <Loading/>
    }

    //error handle
    if (loginError ) {
        toast.error(`Sorry ! No user found`, { id: "userError" });
    }

    //handle submit  
    const handleSubmit = event => {
        event.preventDefault()

        if (email.value === "") {
            setEmail({ value: "", error: "Email is required" });
        }

        if (password.value === "") {
            setPassword({ value: "", error: "Password is required" });
        }

        if (email.value && password.value) {
            signInWithEmailAndPassword(email.value, password.value)
        }
    }

    // reset password 
    const forgetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success(`Rest password send `, { id: "reset" });
        }
        if (resetError) {
            toast.error(`Email is incorrect `, { id: "errorSend" });
        }
    }

    return (
        <div className='account-container '>
            <div className="  container py-3 ">
                <div className=" custom-style w-50 mx-auto">
                    <h3 className='text-center mb-3 py-4'>Welcome Back</h3>
                    <SocialAccount/>

                    {loginError && <p className="text-danger fs-4"> Could not find user </p>}

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Control type="email" ref={emailRef} onBlur={handleEmail}  className='py-2 fs-5' placeholder="Enter email"  />
                        </Form.Group>
                        {email?.error && <p className="text-danger"> {email.error}</p>}

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control onChange={handlePassword}  className='py-2 fs-5' type="password" placeholder="Password"  />
                        </Form.Group>
                        {/* error handle  */}
                        {password?.error && <p className="text-danger"> {password.error}</p>}
                        
                        {loginError && <p className="text-danger"> Password is Wrong</p>}
                        <Button variant="primary" type="submit" className='w-100 fs-5'>
                            Login
                        </Button>
                    </Form>
                    <div className='d-flex mt-2'>
                        <p><button className='btn btn-link text-primary fw-bold ps-0 pe-5 text-decoration-none' onClick={forgetPassword} >Forget Password</button> </p>
                        <div>{loading && <Loading />}</div>
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