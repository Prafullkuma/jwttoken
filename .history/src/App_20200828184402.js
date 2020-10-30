import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Axios from 'axios';
import Posts from './component/Posts'
// import Navbar from './component/Navbar'
// import Signup from './component/Auth/Signup';
// import Signin from './component/Auth/Signin';
// import User from './component/User/User';
// import Dashboard from './component/Admin/Dashboard';
// import Home from './component/Home/Home';
// import Logout from './component/Auth/Logout'
function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [current, setCurrent] = useState(1)
  const [perPage, serPerPage] = useState(10)

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true)
      const res = await Axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data)
      setLoading(false)
    }
    fetchPost()
  }, [])

  //pagination Logic
  const indexOfLastPost = current * perPage
  const indexOfFirstPost = indexOfLastPost - perPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3"> My blog</h1>
      <Posts posts={currentPosts} loading={loading} />

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
