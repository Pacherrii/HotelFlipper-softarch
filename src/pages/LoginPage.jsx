import React, { useState,useEffect}  from "react";
import { Link } from "react-router-dom";
import LoginForm from "../component/LoginForm";
import NavbarHotel from "../component/Navbar";
import '../css/Login.css';

const LoginPage =() =>{
    return(
        
        <div>
            <NavbarHotel />
            <div className="Form-LoginPage">
                <LoginForm/>
            </div>
        </div>
    )
}

export default LoginPage