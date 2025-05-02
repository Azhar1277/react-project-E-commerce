import React, { useState } from 'react'
import './checkout.css/'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Checkout = ({setOrder}) => {
  const[bilingToggle,setBilingToggle]=useState(true)
  const[shipingToggle,setShipingToggle]=useState(true)
  const[paymentToggle,setPaymentToggle]=useState(true)
  const [paymentMethod,setPaymentMethod]=useState('cod')
  const navigate=useNavigate()
  
   const [shipping,setShipping]=useState(
    {
    address:'',
    city:'',
    zip:"" 

   })

   const[billing,setBilling]=useState(
    {
      name:'',
      email:'',
      phone:''
    }
   )

  const cart =useSelector((state)=>state.cart)

  const handleOrder=()=>{

    const newOrder={
      products: cart.products,
      orderNumber:"12344",
      ShippingInformation:shipping,
      totalPrice:cart.totalPrice,
      BillingInformation:billing,
      

  }
  setOrder(newOrder)
  navigate('/Order-confirmation')

  }
   
  
     
  return (
    <div>

      <section>

      <h3>CheckOut</h3>
      </section>
    <section className='main-section'>
        
        <div className='left-box'>
          <section>

         
            <div className='biling' onClick={()=>setBilingToggle(!bilingToggle)} >
                <h3>Billing Information</h3>
              {bilingToggle?<FaAngleUp/>:<FaAngleDown/>}  
            </div>



            {!bilingToggle ? 

            <div>
           
        <div className='name'>

                <label htmlFor="">Name</label>
                <input 
                type="text" 
                name='name'
                
                placeholder='Enter Your Name'
               onChange={(e)=>setBilling({...billing,name:e.target.value})}
                
               />

            </div>


            <div className='email'>

             <label htmlFor=''>Email</label>
             
             <input 
             type="email" 
             name='email'
             placeholder='Enter email'
             onChange={(e)=>setBilling({...billing,email:e.target.value})}
             
             
             />
              </div>

            <div className='phone'>

            <label htmlFor="">Phone</label>
            <input 
            type="text" 
            name='phone'

            placeholder='Enter number'
            onChange={(e)=>setBilling({...billing,phone:e.target.value})}
             
             
            
            
            />
            </div>

            </div>
       :""}

            </section>

                 <section>

         
             <div className='biling' onClick={()=>setShipingToggle(!shipingToggle)} >
                     <h3>Shipping Information</h3>
                        {shipingToggle?<FaAngleUp/>:<FaAngleDown/>}  
               </div>



              {!shipingToggle ? 

                    <div>

       <div className='name'>

    <label htmlFor="">Address</label>
    <input 
    type="text" 
    name='Address'
    placeholder='Enter Your address'
    onChange={(e)=>setShipping({...shipping, address:e.target.value})}
    
   />

       </div>


<div className='email'>

 <label htmlFor=''>City</label>
 
 <input 
 type="text" 
 name='city'
 placeholder='Enter city name'
 onChange={(e)=>setShipping({...shipping, city:e.target.value})}
    
 
 
 />
  </div>

<div className='phone'>

<label htmlFor="">Zip code</label>
<input 
type="text" 
name='zipcode'

placeholder='Enter Zip code'
onChange={(e)=>setShipping({...shipping, zip:e.target.value})}
    


/>
</div>

                   </div>
                :""}

                 </section>


          <section>

          <div className='payment' onClick={()=>setPaymentToggle(!paymentToggle)} >
                <h3>Payment Method</h3>
              {paymentToggle?<FaAngleUp/>:<FaAngleDown/>}  
            </div>

            {!paymentToggle ?
            
           <div >
           
            <div className='cash'>

              <div className='cash-input'>

             
              <input
               type="radio"
               name='payment'
               checked={paymentMethod === 'cod'}
               onChange={()=>setPaymentMethod("cod")}
               
                />
                 </div>
                 <div className='cash-label'>
                 <label htmlFor="">Cash on delivery</label>
                 </div>
              
            </div>
              

            <div className='cash'>
              <div className='cash-input'>

             
              <input
               type="radio"
               name='payment'
               checked={paymentMethod === 'dc'}
               onChange={()=>setPaymentMethod("dc")}
                />
                 </div>
                 <div className='cash-label'>
                 <label  htmlFor="">Debit card</label>

                 </div>
               
            </div>



          {paymentMethod === 'dc' &&(

            <div>
              <h3>Debit card Information</h3>

           
          <div className='debit-info'>
         
         <div>
          <label htmlFor="">Card Number</label>
          <input type="text" placeholder='Enter card Number'/>
         </div>
         <div>
          <label htmlFor="">Card Holder Name</label>
          <input type="text"  placeholder='Enter Name'/>
         </div>
         <div>
          <label htmlFor="">Expiry Date</label>
          <input type="date"  placeholder='Enter date'/>
         </div>
         <div>
          <label htmlFor="">CVV</label>
          <input type="text" placeholder='last 3 digit'/>

         </div>


         </div>
          

          </div>
          )}

           </div>
            
            
            : ""}



          </section>
        </div>
        
        
        
        
      

       

        <div className='right-box'>
        <h3>Order Summary</h3>
        <div className='check-cart'>
        {cart.products.map((item)=>(

        


       <div className='right-main' key={item.id}>

        <div>

          <img src={item.Image}alt="" />
        </div>

         <div className='checkout-info'>
         <h4>{item.name}</h4> 
         <span>
          ${item.price} x {item.quantity}
         </span>
         </div>
       
        </div>
       
        
        
        
        
        ))}


        </div>
        <div className='total-checkout'>
       <span>Total price :</span>
        <span> ${cart.totalPrice.toFixed(2)}</span>
        </div>
        <div>
          <button className='order-btn' onClick={handleOrder}>Place Order</button>
        </div>

        </div>


        </section>
        
        
      


    </div>
  )
}

export default Checkout