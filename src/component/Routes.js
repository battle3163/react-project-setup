import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/homepage/Homepage';
import Kitchen from './pages/kitchen/Kitchen';

import AccountPage from './pages/account/Account'
import Login from "./helper/Login";
import Signup from "./helper/Signup";
import ConfirmPassword from "./helper/ConfirmPassword";
import Password from "./helper/Password";
import ResetPassword from "./helper/ResetPassword"; 

function Routing() {
    const baseurl = '/';
    return (
        <Routes>
            <Route exact path={`${baseurl}/`} element={<HomePage />}></Route>
            <Route exact path={`${baseurl}/account`} element={<AccountPage />}></Route>
            <Route exact path={`${baseurl}/login`} element={<Login />}></Route>
            <Route exact path={`${baseurl}/signup`} element={<Signup />}></Route>
            <Route exact path={`${baseurl}/reset-password`} element={<ResetPassword/>}></Route>
            <Route exact path={`${baseurl}/password`} element={<Password />}></Route>
            <Route exact path={`${baseurl}/confirm-password`} element={<ConfirmPassword />}></Route>
            <Route exact path={`${baseurl}/kitchen`} element={<Kitchen />}></Route>
        </Routes>
    );
}

export default Routing;