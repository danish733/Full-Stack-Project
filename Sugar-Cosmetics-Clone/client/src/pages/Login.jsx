import React, { useState , useContext} from 'react'
import './Login.css'
import TextField from '@mui/material/TextField';
import { authLogin } from '../service/api';
import { useNavigate } from 'react-router-dom';
import { DataContext } from "../context/DataProvider";


import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const loginValues = {
  email:"",
  password:""
}

function Login() {
  const [login,setLogin] = useState(loginValues)
  const navigate = useNavigate();
  const {setAccount} = useContext(DataContext)
  const[error,setError]= useState(false)
  

  const onValueChange=(e)=>{
    setLogin({...login,[e.target.name]: e.target.value})
  }

  const handleLogin=async()=>{
    let response = await authLogin(login)
    console.log(response)
    if(response.status === 200){
      navigate('/')
      setAccount(response.data.data.name)
    }
    else{
      setError(true)
    }
  }

  return (
    <div className='parentDiv'>
      
      <div className='leftSide' >
        <img src="https://media.sugarcosmetics.com/upload/authSIe2.jpg" alt="" />
      </div>


      <div className='rightSide'>

        <div className='arrowIcon'>
          <a href="/"><KeyboardBackspaceIcon/></a>
        </div>

        <div className="hiImage">
          <img src="https://media.sugarcosmetics.com/upload/Hi!.png" alt="" srcset="" />
        </div>

        <div className="signupHeading">
        <h2>Log In Using E-mail I'd</h2>
        </div>

        <div className="textField">
                <TextField onChange={(e)=>onValueChange(e)} name='email' type='email' label="Enter E-mail" variant="outlined" /> <br />
                <TextField onChange={(e)=>onValueChange(e)} name='password'   label="Enter Password" variant="outlined"/> <br />
                { error && <span className='span'>Please Enter Correct Ceredentials</span> }
                <button onClick={()=>handleLogin()} type="button" className='button'>Login</button>
                <p>New to Sugar Cosmetics? <a href="/register">Create an account</a></p>
               

        </div>
        <div class="dotted-line"></div>
        <div className="agree">
        <p>By Signing up or logging in, you agree to our <a href="https://in.sugarcosmetics.com/pages/terms-conditions">Terms and Conditions</a></p>
        </div>

      </div>
    </div>
  )
}

export default Login
