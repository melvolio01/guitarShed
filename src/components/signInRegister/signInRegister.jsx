import React, { useState } from 'react';
import SignIn from '../signIn/signIn';
import SignUp from '../signUp/signUp';
import Button from '../button/button'
import './signInRegister.scss'

const SignInRegister = () => {
    const [showForm, setShowForm] = useState('SignIn')

    const changeForm = () => {
        const newForm = (showForm === 'SignIn') ? 'SignUp' : 'SignIn';
        setShowForm(newForm);
    }

    return (
        <div className="sign-in-forms">
            <div className="sign-in-options">
                <h2>{showForm === 'SignIn' ? 'No account?' : 'Have an account?'}</h2>
                <Button inverted={true} onClick={() => changeForm()}>{showForm === 'SignIn' ? 'Sign-up' : 'Sign-in'}</Button>
            </div>
            {showForm === 'SignIn' ? <SignIn /> : <SignUp />}
        </div>
    );
};

export default SignInRegister;