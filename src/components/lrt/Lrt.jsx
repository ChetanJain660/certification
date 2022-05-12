import React, { useState } from 'react'
import "./lrt.css"
// import { Alert } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
// import Sync from '../Sync/Sync';



export const Lrt = () => {

    const [file ,setFile ] = useState(null);
    const [isDisplay ,setIsDisplay ] = useState(false);
    const [isDisplayCancel ,setIsDisplayCancel ] = useState(false);
    const [showerror, setShowerror]= useState(false);

    const fileHnadler  = async (e) => {
            const  filedata = await e.target.files[0]
        setFile(filedata)
        console.log (filedata)
        setShowerror(false)
        
    }

    const fileSubmitHnadler = (e) =>{
        if( file == null )
        {
    setShowerror(true)
    alert('document not yet uploaded! ')
         
        }else{
            alert('document uploaded succesfully')

            setIsDisplay(true)
            setShowerror(false)
        setIsDisplayCancel(false)
        }
    }


    const fileCandleHandler = (e) =>{
        setFile()
        setFile(null)
        setIsDisplayCancel(true)
        setIsDisplay(false)

    }
  return (
 
   
    <div className='file123' >
        
        
     <input type="file" style={{backgroundColor:" #eef5ff"}} onChange={e =>fileHnadler(e)}></input> 

     <div className=''>
         <Link to="/sync">
         <button className='upload123' onClick={fileSubmitHnadler }>Submit</button>
         </Link>
     <Link to="/home">
         <button  className='upload123' onClick={fileCandleHandler}>Cancel</button>
          </Link>
     </div>
     <div className='status12'>
     
     {isDisplay  ?  <p style={{color:"green"}}> Document upload successfully </p> :null}
                             {/* <Redirect to="/sync"><Sync/></Redirect> */}

               {/* {  showerror ? <p style={{color:"red"}} >Documentn is not yet Uploaded!</p>: null} */}
    
   
     {isDisplayCancel ? <p style={{color:"red"}} > Document upload cancelled!!!! </p> :null}
     
     </div>

    </div>
    
  )
}
