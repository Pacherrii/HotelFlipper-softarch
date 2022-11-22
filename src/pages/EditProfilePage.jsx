import React from "react";
// import { Link } from "react-router-dom";
import EditProfileForm from "../components/EditProfileForm";
import '../css/EditProfile.css';
import NavbarHotel from "../components/Navbar";


const EditProfilePage =() =>{
    return(
        <div className="contain-edit-page">
            <div className="bg-roomservice-edit">
                <div className="bg-roomfade-edit">
                    <NavbarHotel />
                    <div className="Form-EditPage">
                        < EditProfileForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfilePage