import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import './productDetails.css/'
import { addToCart } from '../redux/CartSlice'

const ProductDetails = () => {
  const dispatch=useDispatch()
    const {id}=useParams()
    const[product,setProduct]=useState()
    const products=useSelector((state)=>state.product.products)
    
      
      useEffect(() => {
        const newProduct = products.find((product)=> product.id === parseInt(id) );
        setProduct(newProduct);
   
     
      }, [id,products]);

      const addToBox=((e)=>{
        e.stopPropagation()
        e.preventDefault()
        dispatch(addToCart(product))
      })

      if(!product) return  <div>Loading...</div>
      
   
    

  return (
    <div className='dtls-container'>

   
      <div className='left-dtls'>
      <div>
        <img src={product.Image} alt="" />
      </div>
      </div>

      <div className='right-dtls'>
        <div>
        <h5>{product.name}</h5>
        </div>
        <div className='dtls-span'>
          <span>$ &nbsp;{product.price}</span>
        </div>
        <div className='dtls-btn'>
          <button onClick={(e)=>addToBox(e,product)}>
            Add to Cart
          </button>
        </div>
        <div className='dtls-span1'>
          <span>
            Delivery and Return
          </span>
          <br />
          <br />
          <span>Ask a Question ?</span>
        </div>



      </div>
    
     
   

      
    </div>
  )
}

export default ProductDetails