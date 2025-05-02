import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import EmptyImg from '../assets/Images/empty.jpg'
import './cart.css/'



import { FaTrashAlt } from 'react-icons/fa'


import { useDispatch } from 'react-redux'
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/CartSlice'
import { Navigate, useNavigate } from 'react-router-dom'
import Model from '../components/Model'
import ChangeAddress from '../components/ChangeAddress'
import toast from 'react-hot-toast'

const Cart = () => {
    const cart = useSelector((state)=>state.cart)
   const [address,setAddress]=useState("Noor Ali Lane,Kolkata-700014")
    const[isModelOpen,setIsModelOpen]=useState(false)
    const dispatch = useDispatch()
    const navigate= useNavigate()

   

 
   



  return (
    <div className='shop-div'>
        {cart.products.length > 0 ?

        <div> <h3>SHOPPING CART</h3>
         <div className='maincart-con'>
           
            <div className='main2'>
                <div className='cart-heading'>

                  <div>
                  <p>PRODUCTS</p>
                  </div>

                    <div className='cartinfo-heading'>
                      <p>PRICE</p>
                     
                      <p>QUANTITY</p>
                      <p>SUBTOTAL</p>
                      <p>REMOVE</p>


                    </div>

                </div>

                <div>

                  {cart.products.map((product)=>(

                    <div key={product.id} className='cart-information'>

                        <div className='cart-img'>

                    <img src={product.Image} alt="iamge" />
                   

                       <h3> {product.name}</h3>
                       </div>
                           
                        
                        
                        

                        <div className='cart-info'>
                        <p className='para'>${product.price}</p> 
                        
                          
                          
                            <div className='qtn-btn'>
                            <span onClick={()=>dispatch(decreaseQuantity(product.id))}>-</span>
                            <span>{product.quantity}</span>
                           <span onClick={()=>dispatch(increaseQuantity(product.id))}>+</span>
                          

                            </div>
                          
                            
                           
                            
                           
                            <p className='subpara'>${(product.quantity * product.price).toFixed(2)}</p>
 


                          
                          
                            <button className='dlt'
                            
                         onClick={()=>{
                          dispatch(removeFromCart(product.id));
                          toast.success('product removed')
                        
                        }}
                         
                              >

                            <FaTrashAlt/> 
                              
                            </button>
                          
                          
                              
                                              
                            
                        </div>
                         
                     </div>


                 

                  ))}  
                </div>

                 
            </div>

            <div className='cart-total'>

              <h4>CART TOTAL</h4>

              <div className='t-item'>
              <span>TOTAL ITEMS &nbsp;= &nbsp;{cart.totalQuantity}</span>
              </div>
              

              <div className='shiping'>
              
              <span>Shipping:</span>
              <br />

              <span>shipping to:&nbsp; {address}</span>

              <button onClick={()=>setIsModelOpen(true)}>Change Address</button>

              </div>

              <div className='t-price'>

                <span>Total Price &nbsp;= &nbsp;${cart.totalPrice.toFixed(2)}</span>
                <br />

                <button className='c-btn' onClick={()=>navigate('/checkout')}>Proceed To Checkout</button>
              </div>
            






            </div>


         <Model
         isModelOpen={isModelOpen}
         setIsModelOpen={setIsModelOpen}>
         <ChangeAddress setAddress={setAddress} setIsModelOpen={setIsModelOpen}/>


         </Model>
      
         

         </div>

        
         </div>

      : 
      
      <div>
        <img src={EmptyImg} alt="" /> 
         <p>your cart is empty </p>

      
           </div>}
        
    
    
   




   
    </div>
   
  )
}

export default Cart