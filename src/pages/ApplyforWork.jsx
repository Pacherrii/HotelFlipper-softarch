import React, {useEffect,useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import ApplyforWorkForm from "../component/ApplyforWorkForm";
import '../css/ApplyforWork.css'
import keeper from "../assets/keeper.png"
import NavbarHotel from "../component/Navbar";

const ApplyforWork  = () => {
    return(
        <body className="body1">
            <div>
                <NavbarHotel />
                <img src={keeper} alt="#" className="keeperfix"/>
                <div className="Form-ApplyforWork">
                    <div className="join-with-us">ร่วมเป็นผู้ให้บริการกับเรา</div>
                    <div className="join-with-us-text">เข้ารับการฝึกอบรมที่ได้มาตรฐาน ฟรี! 
                    <br/>
                    และยังได้รับค่าตอบแทนที่มากขึ้นกว่าเดิม</div>
                    <ApplyforWorkForm />
                </div>
            
            </div>
        </body>
    )
}

export default ApplyforWork