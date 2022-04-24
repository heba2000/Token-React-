import './App.css';
import { BrowserRouter, Routes , Route } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Login from './Components/Login/loginComponent';
import Actions from './Components/Actions/actionsComponent'
import GetManager from './Components/GetManager/getManagerComponent';

function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Login/>} />
            <Route path={"/home"} element={<Login/>} />
            <Route path={"/actions"} element={<Actions/>} />
            <Route path={"/get-manager"} element={<GetManager/>} />
          </Routes>
        </BrowserRouter>
  </div>
  );
}

export default App;
