import './App.css';
import { BrowserRouter, Routes , Route } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Login from './Components/Login/loginComponent';

function App() {
  return (
    <div>
        {/* <BrowserRouter>
          <Routes >
            <Route path={"/"} exact component={Login} />
          </Routes >
        </BrowserRouter> */}
        <Login />
  </div>
  );
}

export default App;
