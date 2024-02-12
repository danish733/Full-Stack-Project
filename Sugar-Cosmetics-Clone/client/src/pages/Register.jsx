import React, { useState,useContext } from "react";
import "./Login.css";
import TextField from "@mui/material/TextField";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import {authRegister} from "../service/api";
import { DataContext } from "../context/DataProvider";
import { useNavigate } from 'react-router-dom';

const registerValues = {
    name:"",
    email:"",
    password:""
}

function Register() {

    const [register,setRegister] = useState(registerValues)
    const {setAccount} = useContext(DataContext)
    const navigate = useNavigate();


    const onInputChange=(e)=>{
        setRegister({...register, [e.target.name]: e.target.value })
    }

    const handleRegister=async()=>{
      let response = await authRegister(register)
      setAccount(register.name)
      navigate('/')
      console.log(response)
    }

   


  return (
    <div className="parentDiv">
      <div className="leftSide">
        <img
          src="https://media.sugarcosmetics.com/upload/authSIe2.jpg"
          alt=""
        />
      </div>

      <div className="rightSide">
        <div className="arrowIcon">
          <a href="/">
            <KeyboardBackspaceIcon />
          </a>
        </div>

        <div className="hiImage">
          <img
            src="https://media.sugarcosmetics.com/upload/Hi!.png"
            alt=""
            srcset=""
          />
        </div>

        <div className="signupHeading">
          <h2>Register Using E-mail I'd</h2>
        </div>

        <div className="textField">
        <TextField onChange={(e)=>onInputChange(e)} name="name" type="name" label="Enter Name" variant="outlined" /> <br />
          <TextField onChange={(e)=>onInputChange(e)}  name="email" type="email" label="Enter E-mail" variant="outlined" />{" "}
          <br />
          <TextField onChange={(e)=>onInputChange(e)}  name="password"
            
            label="Enter Password"
            variant="outlined"
          />{" "}
          <br />
          <button onClick={()=>handleRegister()} type="button" className="button">
            Register
          </button>
          <p>
            Already have an account? <a href="/login">Login now</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
