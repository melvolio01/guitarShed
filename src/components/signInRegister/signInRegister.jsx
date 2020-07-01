import React from 'react';
import SignIn from '../signIn/signIn';
import SignUp from '../signUp/signUp';
import './signInRegister.scss'

const SignInRegister = () => {
    return (
        <div className="sign-in-forms">
            <SignIn />
            <SignUp />
        </div>
    );
};

export default SignInRegister;