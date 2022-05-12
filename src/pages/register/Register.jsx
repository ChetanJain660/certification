

import React from 'react'
import "./register.css";
import { useState } from 'react';
import { Alert} from "react-bootstrap";
import Login from '../login/Login';


export default function Register() {

const [firstname, setFirstname] = useState("")
const [lasttname, setLastname] = useState("")
const [email, setEmail] = useState("")
const [phonenumber, setPhonenumber] = useState("")
const [password, setPassword] = useState("")
const [confirmpassword, setConfirmpassword] = useState("")
const [flag, setFlag] = useState(false);
const [login, setLogin] = useState(true)

function handleSubmit (e) {
  e.preventDefault();

  if(!firstname || !lasttname || !email || !phonenumber || !password || !confirmpassword){
    setFlag(true);
  }
  else{
    setFlag(false);
    localStorage.setItem("Email", JSON.stringify(email));
    localStorage.setItem("Password", JSON.stringify(password));

    console.log("saved in locall storage");
    setLogin(!login);
  }
}

function handleClick(){
  setLogin(!login);
}


  return (
<>
    <div className="containers">
    {/* <div className="title">Registration</div> */}
      
      <div className="content">
       {" "} 
      {login ?(

        <form className='rigform' onSubmit={handleSubmit} action="#">
         
          <div className="user-details">
            <div className="input-box">
              <span className="details">First Name</span>
              <input onChange={(event) =>setFirstname(event.target.value)} type="text" placeholder="Enter your firstname"  />
            </div>
            <div className="input-box">
              <span className="details">Last Name</span>
              <input onChange={(event) =>setLastname(event.target.value)} type="text" placeholder="Enter your lastname"  />
            </div>
            <div className="input-box">
              <span className="details">Email</span>
              <input onChange={(event) =>setEmail(event.target.value)} type="text" placeholder="Enter your email" />
            </div>
            <div className="input-box">
              <span className="details">Phone Number</span>
              <input onChange={(event) =>setPhonenumber(event.target.value)} type="text" placeholder="Enter your number" />
            </div>
            <div className="input-box">
              <span className="details">Password</span>
              <input onChange={(event) =>setPassword(event.target.value)} type="password" placeholder="Enter your password"  />
            </div>
            <div className="input-box">
              <span className="details">Confirm Password</span>
              <input onChange={(event) =>setConfirmpassword(event.target.value)} type="password" placeholder="Confirm your password"  />
            </div>
          </div>

          
            
              <button type="submit" className='topheaderRegix'>Register</button>
            
            <p onClick={handleClick} className="alreadyaaa">Already registered{""} login in?</p>
             {flag && (
               <Alert color="primary" various="danger">
                 Please Fill Every Field
               </Alert>
             )}

        </form>

):(
        <Login/>

        )} 
      </div>
    </div>
    </>
  )

}