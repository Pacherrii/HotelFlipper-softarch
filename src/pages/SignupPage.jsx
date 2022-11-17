import React from "react";
// import { Link } from "react-router-dom";
import SignupForm from "../component/SignupForm";
import '../css/Signup.css';
import NavbarHotel from "../component/Navbar";


const SignupPage =() =>{
    return(
        <div>
            <div className="bg-roomservice">
                <div className="bg-roomfade-login">
                    <NavbarHotel />
                    <div className="Form-SignupPage">
                        < SignupForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupPage