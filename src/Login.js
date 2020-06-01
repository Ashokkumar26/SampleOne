import React, { Component } from 'react';
import axios from 'axios'
import Footer from './Footer'
import logo from './hr.png'
import './App.css'

const initialState = {
    login: {
        email: '',
        password: ''
    },
    emailError:'',
    passwordError:'',
    isAlert: false
}
class Login extends Component {
    constructor(props) {
        super(props)

        this.state = initialState;
    }
    validate = () => {
        let emailError= '';
        let passwordError= '';
        if(!this.state.login.email){
            emailError='Email cannot be blank'
        }if(!this.state.login.email.includes('@')){
            emailError = 'Enter valid Email'
        }if(!this.state.login.password){
            passwordError='password cannot be blank'
        }
        if(emailError || passwordError){
            this.setState({emailError,passwordError})
            return false;
        }
        return true;
    }
    changeHandler = e => {
        // const isvalid = this.validate();
        // if(isvalid){
        const isCheckbox = e.target.type === 'checkbox';
        const login = { ...this.state.login }
        login[e.target.name] = isCheckbox ?
        e.target.checked : e.target.value
        this.setState({
            login
        })
    // }
    }
    submitHandler = e => {
        console.log();
        e.preventDefault();
        const isvalid = this.validate();
        if(isvalid){
            const { email, password } = this.state.login
            axios.get('https://5e3bf5b5f2cb3000143918b4.mockapi.io/hello')
            .then(Response=>{
                Response.data.forEach((element,id) => {
                    if (email === element.email && password === element.password) {
                        this.props.history.push("/current")
                    }else{
                        const isAlert = true 
                        this.setState({
                             isAlert
                        })
                    }
                });
            })
            .catch(error=>{
                console.error(error);
            })

        // const { email, password } = this.state.login
        // var datum = JSON.parse(localStorage.getItem('data'))
        // console.log(email, password, datum)
        // let tempFlag = false;
        // datum.forEach((element, id) => {
        //     console.log(element.email)
        //     if (email === element.email && password === element.password) {
        //         // alert('Welcome')
        //         tempFlag = true;
        //     }
        // });
        // if (tempFlag) {
        //     alert('You are successfully logged in')

        // } else {
        //     alert('please login your Id')
        // }
    this.setState(initialState);
    }
}
    render() {
        const {email, password} = this.state.login
        const alert = <div class="alert alert-warning">
        <strong>Warning!</strong> This alert box could indicate a warning that might need attention.
      </div>
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
                                <a className="nav-link" href="/">SignUp</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/current">Customer Requests</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="border-1 container conts mt-3 bg-light pb-5 pt-2">
                    <div className='text-center'>
                    <img src={logo} alt={'logo'} height='120px' width='120px'/>
                    </div>
                    <form className='mt-5' onSubmit={this.submitHandler}>
                        {this.state.isAlert ? alert : null}
                        <div>
                            <label>Email:</label>
                            <input type="text" value={email} className="form-control my-2" placeholder="Enter email" name="email" onChange={this.changeHandler} />
                            {this.state.emailError ? (<div style={{ color: 'red', fontSize: 12 }}>
                            {this.state.emailError}</div>) : null}
                        </div>
                        <div>
                            <label>Password:</label>
                            <input type="password" value={password} className="form-control my-2" placeholder="Enter password" name="password" onChange={this.changeHandler} />
                            {this.state.passwordError ? (<div style={{ color: 'red', fontSize: 12 }}>
                            {this.state.passwordError}</div>) : null}
                        </div>
                        <button type="submit" className="btn btn-primary my-2 px-5 py-2 text-center">Login</button>
                    </form>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Login