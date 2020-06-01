import React, { Component } from 'react'
import './App.css'
import Footer from './Footer'

class OldRequest extends Component {
    render() {
        var datum =JSON.parse(localStorage.getItem('data')) ? JSON.parse(localStorage.getItem('data')) : []
        const answer = datum.map((data,idx) => (<tr key={idx}>
            <td>{data.serielno}</td>
          <td>{data.mobile}</td>
          <td>{data.address}</td>
          <td>{data.quantity}</td>
          </tr>
        ))
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
                                <a className="nav-link" href="/login">Logout</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/current">Current Requests</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            <div className='container overflow'>
                <h1 className='text-center mt-4'>PREVIOUS REQUESTS</h1>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>S.no</th>
                            <th>Mobile no.</th>
                            <th>Address</th>
                            <th>No. of bottles</th>
                        </tr>
                    </thead>
                    <tbody>
                        {answer}
                    </tbody>
                </table>
            </div>
            <Footer/>
            </div>
        )
    }
}

export default OldRequest
