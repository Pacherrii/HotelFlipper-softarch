import React, { useState,useEffect} from "react";
import { Link,useNavigate } from "react-router-dom";
import '../css/ProfileAddressBox.css'
import location from "../assets/location.svg";
import axios from 'axios'



const ProfileAddress = (props) =>{
    const {haddress} = props
    const[currentHaddress,setCurrentHaddress] = useState({
        hotelno:haddress.hotelno,
        soi:haddress.soi,
        road:haddress.road,
        subDistrict:haddress.subDistrict,
        district:haddress.district,
        province:haddress.province,
        zipcode:haddress.zipcode })

    const letgotoLogin = useNavigate()

    useEffect(()=>{
        addresspf()
        // if (localStorage.getItem("h_id")===""){
        //     letgotoLogin('/LoginPage')
        // }
        // axios
        // .get(`http://localhost:3001/hotel/${localStorage.getItem('h_id')}`)
        // .then(res=>{
        //     console.log(res.data)
        //     setCurrentHaddress(res.data)
        // })
        // .catch(err=>{
        //     console.log(err)
        // })
    },[])
    

    const addresspf =async(e) =>{
        const res = await axios
        .get(`http://localhost:3001/hotel/${localStorage.getItem('h_id')}`)
        .then(res=>{

            console.log(res.data)
            // haddress.map((key,value)=> {
            //     haddress[key] = res.data[key]
                
            // }) 
            setCurrentHaddress({
                hotelno: res.data.address,
                soi: res.data.alley,
                road: res.data.street,
                subDistrict: res.data.subdistrict,
                district: res.data.district,
                province: res.data.province,
                zipcode: res.data.postcode

            })
            console.log(haddress)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return(
        <div>
            <div className="Box-HotelProfile-Addr">
                    <div className="Head-HetelPF-AD">
                        ข้อมูลที่อยู่
                    </div>
                    <div className="Line-HotelProfile-Detail"></div>
                    <div className="Box-location-hotel">
                        <img src={location} alt="#" height = {40}/>
                        <div className="Hotel-Location-AD">
                            {currentHaddress.hotelno},
                            &nbsp;
                            ซอย{currentHaddress.soi},<br/>
                            ถนน{currentHaddress.road},&nbsp;
                            แขวง/ตำบล {currentHaddress.subDistrict},<br/> 
                            เขต/อำเภอ {currentHaddress.district},&nbsp;
                            จังหวัด {currentHaddress.province},<br/> 
                            {currentHaddress.zipcode}
                        </div>
                    </div>
                    <div className="for-bttn-edit-HotelAD">
                        {/* <div className="Line-HotelDT-deco"></div>
                   
                        <button className="bttn-edit-HetelAD">
                        แก้ไขข้อมูลที่อยู่
                        </button> */}
                    </div>                   
            </div>

        </div>
    )
}

export default ProfileAddress