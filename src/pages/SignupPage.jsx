import React, { useState,useEffect}  from "react";
import { Link } from "react-router-dom";
import SignupForm from "../component/SignupForm";
import '../css/Signup.css';
import NavbarHotel from "../component/Navbar";


const SignupPage =() =>{
    return(
        <div>
            <NavbarHotel />
            <div className="Form-SignupPage">
                < SignupForm/>
            </div>
        </div>
    )
}

export default SignupPage