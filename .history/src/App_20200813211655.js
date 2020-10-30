import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/signup" component={Signup} />

      </BrowserRouter>
    </div>
  );
}

export default App;
