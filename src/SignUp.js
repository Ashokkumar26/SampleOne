import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
import Footer from './Footer'


const initialState = {
    userdetails: {
        mobile: '',
        password: '',
        confirmPassword: '',
        address: '',
        email: ''
    },
    mobileError: '',
    passwordError: '',
    confirmPasswordError: '',
    addressError: '',
    emailError: '',
    isAlert: false
}
class SignUp extends Component {
    state = initialState;

    validate = () => {
        let mobileError = '';
        let passwordError = '';
        let confirmPasswordError = '';
        let addressError = '';
        let emailError = '';

        if (!this.state.userdetails.mobile) {
            mobileError = 'Mobile number cannot be blank'
        }
        if (this.state.userdetails.mobile.length < 10) {
            mobileError = 'Enter valid mobile number'
        }
        if (this.state.userdetails.password.length < 6) {
            passwordError = 'Enter minimum 6 characters or numbers'
        } if (this.state.userdetails.password !== this.state.userdetails.confirmPassword) {
            confirmPasswordError = 'Password does not match'
        } if (!this.state.userdetails.address) {
            addressError = 'Address cannot be blank'
        }
        if (!this.state.userdetails.email.includes('@')) {
            emailError = 'Enter valid email'
        } if (emailError || mobileError || passwordError || confirmPasswordError || addressError) {
            this.setState({ emailError, mobileError, passwordError, confirmPasswordError, addressError })
            return false;
        }
        return true;
    }
    changeHandler = (e) => {
        const isCheckbox = e.target.type === 'checkbox';
        const userdetails = { ...this.state.userdetails };
        userdetails[e.target.name] = isCheckbox ?
            e.target.checked : e.target.value
        this.setState({
            userdetails
        })
    }
    submitHandler = e => {
        e.preventDefault();
        const isvalid = this.validate();
        if (isvalid) {
            console.log(this.state.userdetails)
            axios.post('https://5e3bf5b5f2cb3000143918b4.mockapi.io/hello', this.state.userdetails)
                // var arr = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];
                .then(response => {
                    console.log(response);
                    const isAlert = true;
                    this.setState({ isAlert })
                    setTimeout(() => {
                        this.props.history.push('/login')
                    }, 1000);
                })
                .catch(error => {
                    console.error(error);
                })
            // arr.forEach((element, idx) => {
            //     console.log(this.state.userdetails.email, element.email)
            // });
            // arr.push(this.state.userdetails)
            // localStorage.setItem('data', JSON.stringify(arr))
            this.setState(initialState);
        }
    }
    render() {
        const alert = <div class="alert alert-success">
            <strong>Success!</strong> You are successfully Registered.
      </div>
        const { mobile, password, confirmPassword, address, email } = this.state.userdetails
        return (
            <div>
                <nav className="navbar navbar-expand-md bg-dark navbar-dark py-2">
                    <a className="navbar-brand" href="/">Bottles</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/current">Customer Requests</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className='container cont mt-2'>
                    <h3 className='text-center'>REGISTER</h3>
                    <form onSubmit={this.submitHandler}>
                        {this.state.isAlert ? alert : null}
                        <div>
                            <label>Mobile:</label>
                            <input type='number' value={mobile} name='mobile' className='form-control' placeholder='Enter number' onChange={this.changeHandler} />
                            {this.state.mobileError ? (<div style={{ color: 'red', fontSize: 12 }}>
                                {this.state.mobileError}</div>) : null}
                        </div>
                        <div className='my-2'>
                            <label>Password:</label>
                            <input type='password' value={password} name='password' className='form-control' placeholder='Enter password' onChange={this.changeHandler} />
                            {this.state.passwordError ? (<div style={{ color: 'red', fontSize: 12 }}>
                                {this.state.passwordError}</div>) : null}
                        </div>
                        <div className='my-2'>
                            <label>Confirm Password:</label>
                            <input type='password' value={confirmPassword} name='confirmPassword' className='form-control' placeholder='Confirm password' onChange={this.changeHandler} />
                            {this.state.confirmPasswordError ? (<div style={{ color: 'red', fontSize: 12 }}>
                                {this.state.confirmPasswordError}</div>) : null}
                        </div>
                        <div className='my-2'>
                            <label>Address:</label>
                            <input type='text' value={address} name='address' className='form-control' placeholder='Enter Address' onChange={this.changeHandler} />
                            {this.state.addressError ? (<div style={{ color: 'red', fontSize: 12 }}>
                                {this.state.addressError}</div>) : null}
                        </div>
                        <div className='my-2'>
                            <label>Email:</label>
                            <input type='text' value={email} name='email' className='form-control' placeholder='Enter Email' onChange={this.changeHandler} />
                            {this.state.emailError ? (<div style={{ color: 'red', fontSize: 12 }}>
                                {this.state.emailError}</div>) : null}
                        </div>
                        <button className='btn btn-primary px-5 py-2' type='submit'>REGISTER</button>
                    </form>
                </div>
                <Footer />
            </div>
        )

    }
}

export default SignUp
