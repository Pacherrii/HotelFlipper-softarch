import React, { useState,useEffect} from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import '../css/ApplyforWorkFormBox.css'
import document from "../assets/document.svg"
import cake from "../assets/cake.svg"

const ApplyforWorkForm = () => {
    const[info,setInfo] = useState({Fname:"",Lname:"",PhoneNum:"",Email:""})
    const[psnAddr,setPsnAddr] = useState({Paddr:"",Palley:"",Pstreet:"",Pdistrict:"",Pcity:"",Pprovince:"",Ppostcode:""})
    // const[bdate,setBdate] = useState({Bday:"",Bmonth:"",Byear:""})
    const[birthday, setBirthday] = useState("")
    const[formError,setFormError] = useState("")
    const[isSubmit,setIsSubmit] = useState(false)
    const[notification,setNotification] = useState("")

    const handleChange = (e) =>{
        const{name,value} = e.target
        setInfo({...info,[name]:value})
        setPsnAddr({...psnAddr,[name]:value})}
        // setBirthday({...birthday,[name]:value})}

    const RegforWork = info =>{
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(info)
        if(info.Email==""&&info.Fname!=""){
            setNotification("กรุณากรอกอีเมล")
        }
        else if(!regexEmail.test(info.Email)){
            setNotification("อีเมลไม่ถูกต้อง")
        }
    }

    const validate=(values)=>{
        const errors ={};
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return errors;
    };

    const submitHandler = (e) =>{
        e.preventDefault();
        RegforWork(info);
        setFormError(validate(info));
        setIsSubmit(true)
    }
    
    useEffect(()=>{
        console.log(formError)
        console.log(info)
        if(Object.keys(formError).lenght=== 0 && isSubmit){
            console.log(info);  
        }
    },[formError]);

    let nowYear = new Date().getFullYear();
    let dataYear = birthday.slice(0, 4);
    let thaiYear = (parseInt(dataYear) + 543).toString();
    let month = birthday.slice(5, 7);
    let day = birthday.slice(8, 10);
    let dateAll = thaiYear + month + day;
    let result = nowYear - parseInt(dataYear);

    // console.log(nowYear)
    // console.log(dataYear)
    // console.log(thaiYear)
    // console.log(month)
    // console.log(day)
    // console.log(dateAll)
    // console.log(result)
    console.log(birthday)

    let defaultValues ={
        Birthday: dateAll
    }
    

    return(
        <div className="BoxFormApply">
            <div>
                <div className="for-Head-ApplyWork">
                    <div className="for-IMG-ApplyWork">
                        <img src={document} alt="#" height = {43}/>
                    </div>
                    <div className="Head-ApplyWork">ลงทะเบียนเพื่อสมัครงาน</div>
                </div>
                <div className="Line-ApplyWork"></div>
                <Form className="Form-ApplyWork" onSubmit={submitHandler}>
                    <div className="two-form-reg">
                        {/* <label> ชื่อจริง* </label> */}
                        <input type="text" placeholder="ชื่อจริง*" name="Fname" id="Fname" value={info.Fname} onChange={handleChange}/>
                    </div>
                    <div className="two-form-reg">
                        {/* <label> นามสกุล* </label> */}
                        <input type="text" placeholder="นามสกุล*" name="Lname" id="Lname" value={info.Lname} onChange={handleChange} />
                        <br />
                    </div>

                    
                    {/* <input type="text" placeholder="วันเกิด" required /> */}
                    
                    {/* <input type="text" placeholder="เดือนเกิด" required /> */}
                    
                    {/* <input type="text" placeholder="ปีเกิด (พ.ศ.)" required/> */}
                    {/* <br/> */}

                    {/* <label className="block text-gray-darker text-md font-bold mt-4 mb-2" htmlFor="Birthday">
                        วัน-เดือน-ปีเกิด </label> */}
                    <div className="for-Birthday-form">
                        <div className="for-IMG-Birthday">
                            <img src={cake} alt="#" height = {40}/>
                        </div>
                        <div className="birthday-form-reg">
                    
                            <input className="celendar"
                                name="Birthday"
                                type="date"
                                placeholder="Select Birthday"
                                value={birthday}
                                onChange={(event) => setBirthday(event.target.value)} required/>
                            <p className="text-red-600">{formError.Birthday}</p>
                        </div>
                    </div>

                    <div className="one-form-reg">
                        <input type="text" placeholder="เบอร์โทรศัพท์*" name="PhoneNum" id="PhoneNum" value={info.PhoneNum} onChange={handleChange}/>
                    </div>

                    <div className="one-form-reg">
                        <input type="text" placeholder="อีเมล*" name="Email" id="Email" value={info.Email} onChange={handleChange}/>
                        <br/>
                    </div>

                    <div className="three-form-reg">
                        <input type="text" placeholder="บ้านเลขที่*" name="Paddr" id="Paddr" value={psnAddr.Paddr} onChange={handleChange}/>
                    </div>
                    <div className="three-form-reg">
                        <input type="text" placeholder="ซอย*" name="Palley" id="Palley" value={psnAddr.Palley} onChange={handleChange}/>
                    </div>
                    <div className="three-form-reg">
                        <input type="text" placeholder="ถนน*" name="Pstreet" id="Pstreet" value={psnAddr.Pstreet} onChange={handleChange}/>
                        <br/>
                    </div>

                    <div className="two-form-reg">
                        <input type="text" placeholder="แขวน/ตำบล*" name="Pdistrict" id="Pdistrict" value={psnAddr.Pdistrict} onChange={handleChange}/>
                    </div>
                    <div className="two-form-reg">
                        <input type="text" placeholder="เขต/อำเภอ*"  name="Pcity" id="Pcity" value={psnAddr.Pcity} onChange={handleChange}/>
                        <br/>
                    </div>

                    <div className="one-form-reg">
                        <input type="text" placeholder="จังหวัด*" name="Pprovince" id="Pprovince" value={psnAddr.Pprovince} onChange={handleChange}/>
                        <br/></div>

                    <div className="one-form-reg">
                        <input type="text" placeholder="รหัสไปรษณีย์*" name="Ppostcode" id="Ppostcode" value={psnAddr.Ppostcode} onChange={handleChange}/>
                        <br/></div>

                    <button type="submit" className="bttn-ApplyWork">ยืนยันข้อมูลและให้ Hotel Flipper ติดต่อกลับ</button>
                </Form>
            </div>

        </div>
    )
}

export default ApplyforWorkForm