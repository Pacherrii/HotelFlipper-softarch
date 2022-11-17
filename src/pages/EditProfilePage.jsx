import React from "react";
// import { Link } from "react-router-dom";
import EditProfileForm from "../component/EditProfileForm";
import '../css/EditProfile.css';
import NavbarHotel from "../component/Navbar";


const EditProfilePage =() =>{
    return(
        <div>
            <div className="bg-roomservice">
                <div className="bg-roomfade-edit">
                    <NavbarHotel />
                    <div className="Form-SignupPage">
                        < EditProfileForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfilePage