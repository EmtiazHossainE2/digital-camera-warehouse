import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';
import auth from '../../../Firebase/firebase.init';
import google from '../../../images/Google.png'
const SocialAccount = () => {
    const navigate = useNavigate()

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    //google success
    if (googleUser) {
        toast.success(`Welcome to Camera House `, { id: "welcome" });
        navigate(from)
    }

    // loading 
    if (googleLoading) {
        return <Loading />
    }

    //error handle 
    let errorMessage;
    if (googleError) {
        toast.error(`Something is wrong`, { id: "error" });
        errorMessage = <p className='text-danger'>Something is wrong.Try again please
        </p>
    }


    return (
        <div >
            <div className='social-icon d-flex align-items-center justify-content-center container'>
                <img onClick={() => signInWithGoogle()} src={google} alt="" />
            </div>
            {errorMessage}
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{ height: '2px', width: '40%' }} className='line-left d-block bg-dark'></div>
                <p className='mt-2 px-3'>Or</p>
                <div style={{ height: '2px', width: '40%' }} className='line-right d-block bg-dark'></div>
            </div>
        </div>
    );
};

export default SocialAccount;