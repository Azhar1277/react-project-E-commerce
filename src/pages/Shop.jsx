import React from 'react'
import './shop.css/'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'

const Shop = () => {
    const products=useSelector((state)=>state.product)
  return (
    <div>

<div className='products'>
 
  <h2>Shop</h2>

  <div className='product-container'>
  {products?.products.map((product)=>(
   
   <ProductCard product={product} key={product.name}/>
    
  ))}
 





 </div>
  
  


 </div>

    </div>
  )
}

export default Shop