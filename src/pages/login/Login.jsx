import React, { useState } from 'react'
import './login.css';
import { Link ,Redirect} from "react-router-dom";
import { Alert } from 'react-bootstrap';
import Home from '../../components/home/Home';

export default function Login() {

  const [emaillog, setEmaillog] = useState("");
  const [passwordlog, setPasswordlog] = useState("");
  const [flag, setFlag] = useState(false);
  const [home, setHome] = useState(true);



  function handleLogin(e){
    // let storeMe = {
    //   myBool: true
    // }
    
    // localStorage.setItem('test', JSON.stringify(storeMe))
    // let result = JSON.parse(localStorage.getItem('test'))

//       if( !email || !password ){
//     setFlag(true);
//   }
//   else{
//     setFlag(false);
//     localStorage.setItem("Email", JSON.stringify(email));
//     localStorage.setItem("Password", JSON.stringify(password));

//     console.log("saved in locall storage");
//     setLogin(!login);
//   }
// }



    e.preventDefault();
    let mail = localStorage.getItem("Email").replace(/"/g,"");
    let pass = localStorage.getItem("Password").replace(/"/g,"");

    if(!emaillog || !passwordlog){
      setFlag(true);
      console.log("empty");
    
  } else if (passwordlog !== pass || emaillog !== mail) {
    setFlag(true);
    }
    else{
      setHome(!home);
      setFlag(false);
    }


  }
  
 
  return (

    <div className="con">
      <div className="main active">
    <div >
      {home ?(

        <form  onSubmit={handleLogin}>
        <div className="top-div">
          <div className="msg-img">
            <h3>Log in</h3>
          </div>
          
        </div>
        <div className="input-text">   <label>Email</label> <input onChange={(event) =>setEmaillog(event.target.value)} type="text" placeholder="Email" require /> </div>
        <div className="input-text">   <label>Password</label> <input onChange={(event) =>setPasswordlog(event.target.value)} type="password" placeholder="Password" require /> </div>
        <div className="buttons">
          
            <button type="submit" className='topheader222' >Login</button>
            {flag && (
               <Alert color="primary" various="danger">
                 Please Fill Correct Info
               </Alert>
             )}

        </div>
        <Link to="/register">
         <div className="sign-in">
         
            <a href='/register' className='alreadybb'> Register Here</a>
          
        </div> 
        </Link>
        
        </form>
        ):(
      <Redirect to="/home"><Home/></Redirect>
  
          )} 
       </div>

     </div>
     </div>
  )
}