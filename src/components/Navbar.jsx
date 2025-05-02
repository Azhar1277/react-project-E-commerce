import React, { useEffect, useState } from 'react'
import './Navbar.css/'
import { Link, useNavigate } from 'react-router-dom'
import { FaShoppingCart, FaUser} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import Model from './Model'
import Login from './Login'
import Register from './Register'
import { setSearchTerm } from '../redux/ProductSlice'



const Navbar = () => {
  const products= useSelector((state)=>state.cart.products)
  const [isModelOpen,setIsModelOpen]=useState(false)
  const[isLogin,setIsLogin]=useState(true)
  const[search,setSearch]=useState()
  const navigate=useNavigate()
  const dispatch = useDispatch()


 
    const handleSearch=(e)=>{
      e.preventDefault()
   
  
      dispatch(setSearchTerm(search))
      navigate('/filter-data')
  
  
    }
   
 
  
  
  const openSignUp=()=>{
    setIsLogin(false)
    setIsModelOpen(true)
  }
  const openLogin=()=>{
    setIsLogin(true)
    setIsModelOpen(true)
  }


//function handleClick(){

 //console.log("azhar")

//}

//search product
  
  








  return (
  
   <div className='main-nav'>

  

       <div className='navbar'>

      
        <div className='e-shop'>
           <Link to="/">

           E-shop
           
           </Link>
        </div>
        <form onSubmit={handleSearch}>
        <div className='search'>
         
        
         <input type="text" 
         onChange={(e)=>setSearch(e.target.value)}
          placeholder='search-Product'
         
          />
      
      
     </div>

        </form>
      
        <div className='last-nav'>
            
            <Link to="/cart" className='cart'>
         <FaShoppingCart />

         {products.length > 0 && (
          <span className='cart-span'>
            {products.length}
          </span>
         )}
          
          
          </Link>

         
         <button className='login-btn'
        onClick={()=> setIsModelOpen(true)}>
            Login | Register
          </button>
          <button className='user-btn'>
           <FaUser/>
          </button>

    
         
        </div>
        

      
        </div>
        <div className='list' >
      <Link to='/' className='link' >Home</Link>
      <Link to='/shop' className='link' style={{textDecoration:'none'}}>Shop</Link>
      <Link className='link' style={{textDecoration:'none'}}> Contact</Link>
      <Link className='link' style={{textDecoration:'none'}}>About</Link>

        </div>

        <Model isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
          
          {isLogin ? <Login openSignUp={openSignUp}/> :<Register openLogin={openLogin}/>}
          
          
            </Model>

        </div>
       

        
  
  )
}


export default Navbar