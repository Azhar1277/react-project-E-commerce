import React, { useState } from 'react'

const ChangeAddress = ({setAddress,setIsModelOpen}) => {
    const[newAddress,setNewAddress]=useState('')

    const onClose= ()=>{
      setAddress(newAddress)
      setIsModelOpen(false)

    }
  return (
    <div>

    <input type="text"
     
     placeholder='Enter new address'
     className=''
     onChange={(e)=>setNewAddress (e.target.value)}
    />


    <div className=''>
        <button className=''
        onClick={()=>setIsModelOpen(false)}>cancel</button>

        <button onClick={onClose} >
        Save Address
        </button>
    </div>



    </div>
  )
}

export default ChangeAddress