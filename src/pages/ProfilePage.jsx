import React, {useEffect,useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfileDetail from "../component/ProfileDetail";
import ProfileAddress from "../component/ProfileAddress";
import '../css/Profile.css'
import NavbarHotel from "../component/Navbar";
import Footer from "../component/Footer";
import HotelDetaildemo from "./HotelDetaildemo";
import HotelAddressdemo from "./HotelAddressdemo";
import EditProfileAddress from "../component/EditProfileAddress";

const ProfilePage = () =>{
    // const [editMode, setEditMode] = useState(false)

    // const changeTofalse = () => {
    //     setEditMode(false);
    //   }
    //   console.log(editMode);

    // const toggleTab = (index) => {
    //     console.log(index);
    //     setToggleState(index);
    // }
    
    return(
        <div className="body1">
            <NavbarHotel />
            <div className="Top-Profilepage">
                <div className="Text-top-profile">
                    โปรไฟล์
                </div>
            </div>
            <div className="Main-Profilepage">
                <div className="Box-Main-Profilepage">
                    {/* <ProfileDetail/> */}
                    { HotelDetaildemo.map((item) => (
                        <div ><ProfileDetail hdetail={item}/></div> ))}
                </div>
                <div className="Box-Main-Profilepage">
                    {/* <ProfileAddress/> */}
                    
                    { HotelAddressdemo.map((addr) => (
                        <div ><ProfileAddress haddress={addr}/></div> ))}
                </div>    
            </div>
            <Footer />
        </div>
    )
}

export default ProfilePage