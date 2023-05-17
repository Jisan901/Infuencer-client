import { BrowserRouter } from "react-router-dom";
import {Routes,Route} from 'react-router-dom';
import Private from './Private';
import Main from "../layouts/Main";
import DashboardLayout from "../layouts/DashboardLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import Cart from "../pages/Cart";
import Users from "../pages/Users";
import Profile from "../pages/Profile";
import Products from "../pages/Products";
import ManageProducts from "../pages/ManageProducts";
import AddProduct from "../pages/AddProduct";
import ErrorFg from "../pages/Error";
function Routers() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main/>}>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                <Route path="/products" element={<Products />}></Route>
            </Route>
            <Route path="/dashboard" element={<Private><DashboardLayout/></Private>}>
                <Route path="/dashboard" element={<Dashboard/>}></Route>
                <Route path="/dashboard/cart" element={<Cart/>}></Route>
                <Route path="/dashboard/users" element={<Users/>}></Route>
                <Route path="/dashboard/profile" element={<Profile/>}></Route>
                <Route path="/dashboard/products" element={<ManageProducts/>}></Route>
                <Route path="/dashboard/addproducts" element={<AddProduct/>}></Route>
            </Route>
            <Route path="/error" element={<ErrorFg/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default Routers;
