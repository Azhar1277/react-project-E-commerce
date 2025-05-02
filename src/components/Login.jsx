import React from 'react'
import './login.css/'

const Login = ({openSignUp}) => {
  return (
    <div>
        <h2>Login</h2>
        <form>
            <div className='login-email'>
      <label htmlFor="" className='label-email'>Email</label>
      <input type="text" 
      placeholder='Enter your email'
      
      />
       </div>



            <div className='login-pass'>
      <label htmlFor="" className='label-pass'>Password</label>
      <input type="password" 
      placeholder='Enter your password'
      />
    </div>

    
    <div className='login-checkbox'>
     
    <input type="checkbox"/>
      <label htmlFor="" className='login-label'>Remember me</label>

      <a href="">Forgot Password</a>

    
       </div>
    

     
      
    
     
      
    
    <div>

        <button  className='loginpage-btn'>Login</button>
    </div>




        </form>
        <div className='login-last'>

            <span>Don't have an account</span>
            <button  className='signup-btn' onClick={openSignUp}>Sign up</button>
        </div>




    </div>
  )
}

export default Login