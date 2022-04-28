import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Login from './pages/Account/Login/Login';
import Signup from './pages/Account/Signup/Signup';
import Dashboard from './pages/Account/Dashboard/Dashboard';
import NotFound from './components/NotFound/NotFound';
import Footer from './pages/Footer/Footer/Footer';
import Header from './components/Header/Header';

const App = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/signup' element={<Signup/>}></Route>
                {/* <Route path='/' element={}></Route> */}
                <Route path='/dashboard' element={<Dashboard/>}></Route>
                <Route path='*' element={<NotFound/>}></Route>
            </Routes>
            <Footer/>
        </div>
    );
};

export default App;