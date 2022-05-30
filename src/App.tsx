import React from 'react';
import './App.css';
import {BrowserRouter, Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
           {/*eslint-disable-next-line react/jsx-no-undef*/}
          <Routes>
            <Route path='/' element={<Home />} />

            {/*<Route path='/profile' element={<Profile/>} />*/}

            <Route path='/signup' element={<Register />} />

            <Route path='/login' element={<Login />} />

            {/*<Route path='/users' element={<Users/>} />*/}
            {/*<Route path='/users/create' element={<UserCreate/>} />*/}
            {/*<Route path='/users/:id/edit' element={<UserEdit/>} />*/}

            {/*<Route path='/roles' element={<Roles/>} />*/}
            {/*<Route path='/roles/create' element={<RoleCreate/>} />*/}
            {/*<Route path='/roles/:id/edit' element={<RoleEdit/>} />*/}

            {/*<Route path='/products' element={<Products/>} />*/}
            {/*<Route path='/products/create' element={<ProductCreate/>} />*/}
            {/*<Route path='/products/:id/edit' element={<ProductEdit/>} />*/}

            {/*<Route path='/orders' element={<Orders/>} />*/}
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
