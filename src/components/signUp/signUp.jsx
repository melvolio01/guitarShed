import React, { Component } from 'react';
import FormInput from '../formInput/formInput';
import Button from '../button/button';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './signUp.scss';

class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    };

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            createUserProfileDocument(user, { displayName })

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        } catch (error) {
            const { message } = error;
            // need to add error-rendering
            console.log(message)
        }
    }

    handleChange = event => {
        const { value, name } = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="register">No account</h2>
                <span>Sign up with Email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required />
                    <FormInput
                        type='email'
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required />
                    <FormInput
                        type='password'
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required />
                    <FormInput
                        type='password'
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required />
                    <div className="buttons">
                        <Button type="submit">Sign Up</Button>
                    </div>
                </form>

            </div>
        )
    }
}
export default SignUp;