import React from 'react'
import './productCard.css/'
import { FaStar } from 'react-icons/fa'
import { addToCart } from '../redux/CartSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

const ProductCard = ({product}) => {
  const dispatch = useDispatch()

  const handleAddToCart =(e,product)=>{
    e.stopPropagation()
    e.preventDefault()

    dispatch(addToCart(product))
   toast.success(" Item added to the cart")
  
  }

  return (
    <Link to={`/product/${product.id}`}  style={{textDecoration:'none'}}>
      
    <div className='product-card' key={product.name}>
      <div className='pro-img'>
         <img src={product.Image} alt="Image" />
      </div>

      <div className='product-info'>
      <h4>{product.name}</h4>
      <p>$ {product.price}</p>

      </div>

      <div className='fstar'>
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
      </div>
      <div className='span' onClick={(e)=>handleAddToCart(e,product)}>
        <span>+</span>
      </div>
   
   

    </div>
     </Link>
  )
}

export default ProductCard