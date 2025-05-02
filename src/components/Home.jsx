import React, { useEffect } from 'react'
import './Home.css'
import Heroimg from '../assets/Heroimg/hero.jpg'
import InfoSection from './Infosection'
import {Mockdata} from '../assets/Mockdata'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/ProductSlice'
import ProductCard from './ProductCard'
import Shop from '../pages/Shop'





const Home = () => {
  const dispatch=useDispatch()
  const products = useSelector((state)=>state.product) 
  useEffect(() => {
    dispatch(setProducts(Mockdata))
   
  },[])
  
  return (
    <div>
      
   
    <div className='container'>

      <div className='left'>
        <div className='heading'>
        <h2>Shop By Category</h2>
        </div>
        <div className='list'>
        <ul>
          <li>Electronics </li>
          <li>Fashion</li>
          <li>Home & Kitchen</li>
          <li>Beauty</li>
          <li>Sports</li>
          <li>Automotive</li>
        </ul>

        </div>
       

      </div>
      <div className='right'>
        <img src={Heroimg} alt="hero" />
        <div className='right-info'>
          <p>Code with Azhar</p>
          <h3>Welcome To E shop</h3>
          <p>Millions+ Products</p>
          <button>Shop Now</button>
        </div>

      
      </div>



    </div>
   
   


<InfoSection/>

<div className='products'>
 
  <h2>Top products</h2>

  <div className='product-container'>
  {products?.products.map((product)=>(
   
   <ProductCard product={product} key={product.name}/>
    
  ))}
 





 </div>
  
  


 </div>
 <Shop/>

 

    </div>
  )
}


export default Home