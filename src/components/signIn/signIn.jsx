import React, { Component } from 'react';
import FormInput from '../formInput/formInput'
import Button from '../button/button'
import './signIn.scss'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' })
        } catch (error) {
            const { message } = error;
            console.log(message)
        }

        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>Already have an account?</h2>
                <span>Sign in with username and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} onChange={this.handleChange} label="Email" required />
                    <br></br>
                    <FormInput name="password" type="password" value={this.state.password} onChange={this.handleChange} label="Password" required />
                    <div className="buttons">
                        <Button type="submit">Sign In</Button>
                        <Button onClick={signInWithGoogle} isGoogleSignIn>Google Sign In</Button>
                    </div>

                </form>
            </div>
        );
    }
}

export default SignIn;