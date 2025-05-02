import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import './order.css/'

const Order = ({order}) => {
    const navigate=useNavigate()
  
  return (
    <div className='order-cnfrm'>

    <div>
    <h2>Thank You for your order</h2>
   <p>Your order has been placed successfully you willl receive an email soon</p>

    </div>

 
    <div className='ord-sum'>

    <h3>Order summary</h3>
    <span>Order number:{order.orderNumber}</span>
    </div>

    <div className='shipping-info'>
      <h2>Shipping Informatiom</h2>

         <span className='span2'>{order.ShippingInformation.address}</span>
         <span className='span2'> {order.ShippingInformation.city}</span>
  
      <span className='span2'>{order.ShippingInformation.zip}</span>
    
  
    </div>

    
    <div className='Billing-info'>
      <h2>Billing Information</h2>
  <span className='span2'>{order.BillingInformation.name}</span>
  <span className='span2'>{order.BillingInformation.email}</span>
  
  <span className='span2'>{order.BillingInformation.phone}</span>
  
  

    </div>
    <div className='pro'>

     <h3>Product Ordered</h3>
      {order.products.map((product)=> 
        <div className='order-info' key={product.id}>
            <span>{product.name}&nbsp;x&nbsp;{product.quantity} = </span>
            
            <span>{product.price}*{product.quantity}&nbsp;=&nbsp;${product.totalPrice}</span>
        </div>

      )}

    </div>
    <div className='to-price' >
        <span>Total Price  &nbsp;=</span>
        <span>${order.totalPrice}</span>
    </div>
    <div className='ord-btn'>
        <button>order tracking</button>
        <button onClick={() => navigate('/')}>Continue shopping</button>
    </div>

 </div>




   
  )
}

export default Order