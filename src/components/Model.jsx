
import React from "react";
import './Model.css/'
import { useEffect } from "react";


function Model({isModelOpen,setIsModelOpen,children}) {

 
  
 if(!isModelOpen) return null;

 useEffect(() => {
  document.body.style.overflowY="hidden";
 
   return () => {
    document.body.style.overflowY="scroll";
 
 
    
   };
 },[isModelOpen,setIsModelOpen] )
 

 

  return (

    <div>

     <div className="model-wrapper"></div>

    <div className='main-con'>
         <button className="x-btn" onClick={()=>setIsModelOpen(false)}>
     
         x 
     </button>

      
    <div className="con" >

        {children}

    </div>
    </div>



    </div>



  )
}


export default Model