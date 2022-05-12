import React, { useState } from 'react'
import "./topbar.css"
import { Link } from "react-router-dom";


export default function Topbar() {
  

  // const [loggedDetails, setLoggedDetails] = useState()

const loggedIn = localStorage.getItem('loggedValue')
console.log(loggedIn)




  return (
    <>
    <div className='topbar'>
      <div className='topbarWrapper'>

        <div className='topLeft'>
          <span className='logo'>Alchemy Solutions </span>
        </div>

        <div className='topRight'>

          <div className="topbarIconContainer">
            <Link to="/home" className="link">
              <span className='topheader123'>Home</span>
            </Link>
          </div>

          <div className="topbarIconContainer">
            <Link to="/lrt" className="link">
              <span className='topheader123'>Sync with LRT</span>
            </Link>
          </div>

          <div className='topbarIconContainer'>
            <Link to="/details" className="link">
              <span className='topheader123'>Enrollment</span>
            </Link>
          </div>

  
          
          {!loggedIn ?
          <>
          <div className='topbarIconContainer'>
            <Link to="/login" className="link">
              <span className='topheader123'>Login</span>
            </Link>
          </div>
          <div className='topbarIconContainer'>
            <Link to="/register" className="link">
              <span className='topheader123'>Register</span>
            </Link>
          </div>

          </> :
          <div className='topbarIconContainer'>
            <Link to="/home" className="link">
              <span className='topheader123'>Logout</span>
            </Link>
          </div>
           }
        </div>

      </div>
    </div>
    </>
  )
}
