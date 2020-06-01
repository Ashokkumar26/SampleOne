import React, { Component } from 'react'
import './App.css'
import Footer from './Footer'

class CurrentRequest extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       currentRequest: [{
        serielno:'',
        mobile:9003439284,
        address:'sholinganallur',
        quantity:50
    },
    {
      serielno:'',
      mobile:8754434451,
      address:'adyar',
      quantity:50
    },
    {
      serielno:'',
      mobile:783983902,
      address:'Nagar',
      quantity:390
    }]
    }
  }
  
    paidHandler = (data,idx) => { 
      const currentRequest =  this.state.currentRequest;
      const tempArray = [];
      var arr = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];
      currentRequest.forEach((item, key) => {
        if(item.mobile !== data.mobile) {
          tempArray.push(item);
        }if(item.mobile === data.mobile){
          arr.push(item)
          localStorage.setItem('data', JSON.stringify(arr))
        }
      })
      this.setState({
        currentRequest: tempArray
    });
  }
    render() {
    const result = this.state.currentRequest.map((data,idx) => (<tr key={idx}>
      <td>{data.serielno}</td>
    <td>{data.mobile}</td>
    <td>{data.address}</td>
    <td>{data.quantity}</td>
    <td><button type='button' className='rounded-circle btn btn-light' onClick={() => this.paidHandler(data, idx)}><i className='fas fa-check-circle' style={{fontSize:'20px',color:'green'}}></i></button></td></tr>)
   )
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
                                <a className="nav-link" href="/old">Previous Requests</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            <div className='container'>
              <h1 className='text-center mt-4'>CURRENT REQUESTS</h1>
    <table className="table table-bordered">
    <thead>
      <tr>
        <th>S.no</th>
        <th>Mobile no.</th>
        <th>Address</th>
        <th>No. of bottles</th>
        <th>Paid</th>
      </tr>
    </thead>
    <tbody>
      {result}
    </tbody>
      </table>
            </div>
            <Footer/>
            </div>
        )
    }
}
export default CurrentRequest