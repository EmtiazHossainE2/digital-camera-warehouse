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
import { Toaster } from 'react-hot-toast';
import ProductDetail from './pages/Home/ProductDetail/ProductDetail';
import RequireAuth from './pages/Account/RequireAuth/RequireAuth';
import ManageInventories from './pages/Account/ManageInventories/ManageInventories';
import StokeItem from './pages/Account/StokeItem/StokeItem';
import MyItems from './pages/Account/Dashboard/MyItems/MyItems';
import Blog from './pages/Blog/Blog';

const App = () => {
    return (
        <div className='overflow-hidden'>
            <Toaster />
            <Header />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/manage-inventories' element={
                    <RequireAuth>
                        <ManageInventories></ManageInventories>
                    </RequireAuth>
                }></Route>
                <Route path='/my-items' element={
                    <RequireAuth>
                        <MyItems/>
                    </RequireAuth>
                }></Route>
                <Route path='/stock-item' element={
                    <RequireAuth>
                        <StokeItem/>
                    </RequireAuth>
                }></Route>
                <Route path='/inventory/:inventoryId' element={
                    <RequireAuth>
                        <ProductDetail></ProductDetail>
                    </RequireAuth>
                }></Route>
                <Route path='blog' element={<Blog/>}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/signup' element={<Signup />}></Route>
                <Route path='/dashboard' element={<Dashboard />}></Route>
                <Route path='*' element={<NotFound />}></Route>
            </Routes>
            <Footer />
        </div>
    );
};

export default App;