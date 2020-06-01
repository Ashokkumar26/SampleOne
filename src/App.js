import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import SignUp from './SignUp';
import CurrentRequest from './CurrentRequest';
import Login from './Login';
import OldRequest from './OldRequest';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' exact component={SignUp} />
        <Route path='/login' component={Login} />
        <Route path='/current' component={CurrentRequest} />
        <Route path='/old' component={OldRequest} />
      </Router>
    </div>
  );
}

export default App;
