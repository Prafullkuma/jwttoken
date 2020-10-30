import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Axios from 'axios';
// import Navbar from './component/Navbar'
// import Signup from './component/Auth/Signup';
// import Signin from './component/Auth/Signin';
// import User from './component/User/User';
// import Dashboard from './component/Admin/Dashboard';
// import Home from './component/Home/Home';
// import Logout from './component/Auth/Logout'
function App() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => console.log(res.data))
  }, [])
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Navbar />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="logout" component={Logout} />
        <Route path="/user" component={User} />
        <Route path="/admin" component={Dashboard} />
        <Route exact path="/" component={Home} />
      </BrowserRouter> */}
      <h1>This is App</h1>


    </div>
  );
}

export default App;
