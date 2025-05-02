import React from 'react'
import'./register.css/'

const Register = ({openLogin}) => {
  return (
    <div>


        <h2>Sign up</h2>
        <form>
            <div className='signup-name'>
      <label htmlFor="" className='label-name'>Name</label>
      <input type="text" 
      placeholder='Enter your name'
      
      />
       </div>



            <div className='login-pass'>
      <label htmlFor=""className='label-pass'>Password</label>
      <input type="password" 
      placeholder='Enter your password'
      />
    </div>
    
  
    <div>

        <button className='loginpage-btn'>sign up</button>
    </div>




        </form>
        <div className='signup-last'>

            <span>Already have an account</span>
            <button className='signupPage-btn' onClick={openLogin}>Login</button>
        </div>




    </div>


    
  )
}

export default Register