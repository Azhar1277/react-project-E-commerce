import React from 'react'
import './footer.css/'
import { Link } from 'react-router-dom'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
    <div className='f-container'>
      <div className='div1'>

        <h3>E-shop</h3>
        <p>
          Your one step for all your needs.Shop with us <br />
          and experience the best online <br /> shopping experience.
           
          
        </p>
      </div>

      <div className='links'> 
        <h4>Quick Links</h4>

      <ul className='u-list'>

        <li>
          
          <Link>Home</Link>

        </li>

        <li>
          
          <Link>Shop</Link>
        </li>
        <li>
          
          <Link>Contact</Link>
        </li>
        <li>
          
          <Link>About</Link>
        </li>
        
      </ul>
      </div>

      <div className='social'>
     <h4> Follow us  </h4>
     <div className='icon'>
      <a href=""><FaFacebook/></a>
      <a href=""><FaInstagram/></a>
      <a href=""><FaLinkedin/></a>
      <a href=""><FaGithub/></a>
     </div>


     <form>
      <input type="email" placeholder='Enter mail' />
      <button>Subscribe</button>
     </form>
     </div>

     <div className='last'>
  
  <p>&copy;All right Reserved by Azhar</p>
  <div>
    <a href="">Terms and condition</a>
    <a href="">Privacy and policy</a>
  </div>
 
  </div>
 
     

    </div>
   


    </div>
  )
}

export default Footer