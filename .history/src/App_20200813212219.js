import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Signup from './component/Auth/Signup';
import Signin from './component/Auth/Signin';
import User from './component/User/User';
import Dashboard from './component/Admin/Dashboard';
import Home from './component/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Nav bar</h1>
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/user" component={User} />
        <Route path="/admin" component={Dashboard} />
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
