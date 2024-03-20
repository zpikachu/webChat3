import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path={"/home"} element={<Home />} />
          <Route path={"/register"} element={<SignUp />} />
          <Route path={"/"} element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
