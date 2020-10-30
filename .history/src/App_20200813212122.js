import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Signup from './component/Auth/Signup';
import Signin from './component/Auth/Signin';
import User from './component/User/User';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/user" component={User} />

        <Route path="/signup" component={} />
      </BrowserRouter>
    </div>
  );
}

export default App;
