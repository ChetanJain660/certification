import React from 'react'
import { Link } from "react-router-dom";
import "./details.css";



export default function Details() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h3 className="userTitle">Candidate Details</h3>
      </div>
      <div className="userContainer">
        <div className="userUpdate">
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>First Name: </label>
                <input
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                />
              </div>
          
              <div className="userUpdateItem">
                <label>Email: </label>
                <input
                  type="text"
                  placeholder="email"
                  className="userUpdateInput"
                />

              </div><br></br>

              <div className="userUpdateItem">
                <label>Mobile No: </label>
                <input
                  type="text"
                  placeholder="+91 0000000000"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address:</label>
                <input
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>State:</label>
                <input
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Cources:</label>
                <select class="form-control">
                  <option>Select...</option>
                  <option>Certification Platform maintenance</option>
                  <option>Connectivity to Alchemey internal LRT tool & catalogues synchronization</option>
                  <option>OEM/Technologies</option>
                  <option>Certification Platform Development</option>

                </select>
              </div>
              </div>
              <div className="userUpdateLeft">

              <div className="userUpdateItem">
                <label>Last Name: </label>
                <input
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">

                <label >Gender:</label>
                <select className="form-control">
                  <option>Select...</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div><br></br>
              <div className="userUpdateItem">
                <label>D.O.B:</label>
                <input
                  type="Date"
                  placeholder=""
                  className="userUpdateInput"
                />
              </div>
             
              <div className="userUpdateItem">
                <label>City:</label>
                <input
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                />
              </div>
          
              <div className="userUpdateItem">
                <label>Country:</label>
                <input
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                />
              </div>
          <br />
              
            
           
            </div> 
          
          </form>
          <div className="userUpdateRight">
            <Link to="/vocher">
              <button className="nextDe">Next</button>
            </Link>
          </div>
        </div>

      </div>
    
    </div>

  )
}