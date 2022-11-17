import React, { useState,useEffect}  from "react";
import { Link } from "react-router-dom";
import LoginForm from "../component/LoginForm";
import NavbarHotel from "../component/Navbar";
import '../css/Login.css';

const LoginPage =() =>{
    return(
        
        <div>
            <div className="bg-roomservice">
                <div className="bg-roomfade-login">
                    <NavbarHotel />
                    <div className="Form-LoginPage">
                        <LoginForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage