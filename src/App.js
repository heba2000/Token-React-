import './App.css';
import { BrowserRouter, Routes , Route } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from "react";
import Login from './Components/Login/loginComponent';
import Actions from './Components/Actions/actionsComponent'
import GetManager from './Components/GetManager/getManagerComponent';
import SetManager from './Components/SetManager/setManager';

function App() {
  return ( 
    <div className='app'>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Login/>} />
              <Route path='/actions' element={<Actions/>} />
              <Route path='/get-data' element={<GetManager/>} />
              <Route path='/set-data' element={<SetManager/>} />
          </Routes>
        </BrowserRouter>
    </div>         
  );
}

export default App;
