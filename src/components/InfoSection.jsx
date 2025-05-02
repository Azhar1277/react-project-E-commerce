import React from 'react'
import './info.css'
import { FaHeadset, FaLock, FaMoneyBillWave, FaShippingFast, FaTag } from 'react-icons/fa'

const InfoSection = () => {
    {
        /*
    
    const infoItems=[
        {

            icon:<FaShippingFast className='fashipping'/>,
            title:'Free Shipping',
            des:"Got your orders delivered with noextra cost",

        },
        {

            icon:<FaHeadset className='fahead'/>,
            title:'Support 24/7',
            des:'We are here to assist you',
        },
        {

            icon:<FaMoneyBillWave className='fawill'/>,
            title:'100% money back',
            des:"Full refund if u r not satisfied",

        },
        {

            icon:<FaLock className='Falock'/>,
            title:'Payment Secure',
            des:"Your payment info is safe with us",

        },
        {

            icon:<FaTag className='fatag'/>,
            title:'Discount',
            des:"Enjoy the best prices on ur product",

        },






    ];
    */
  return (
    <div>
       {/*

       } 
        <div className='info-container'>
            {infoItems.map((item,index)=>{
            <div key={index} className='card'>
                {item.icon}
                <h3>{item.title}</h3>
                <p>{item.des}</p>

            </div>

            })}

        </div>*/}


        <div className='info-container'>
            <div className='card'>
           <FaShippingFast className='fas'/>
            <h2>Free Shipping</h2>
            <p>Got your orders delivered with noextra cost</p>

            </div>
            <div className='card'>
            <FaHeadset className='fa'/>
            <h2>Support 24/7 </h2>
            <p>We are here to assist you</p>

            </div>
          
            <div className='card'>
           <FaTag className='fat'/>
           <h2 className='dis'>Discount</h2>
           <p>Enjoy the best prices on ur product</p>
            </div>

            <div className='card'>
            <FaMoneyBillWave className='fam'/>
          <h2>100% M-back</h2>
          <p>Full refund if u r not satisfied</p>

            </div>
          
            <div className='card'>
                <FaLock className='fal'/>

                <h2>Payment Secure</h2>
                <p>Your payment info is safe with us</p>
     
            </div>
          
          
          
        </div>


    </div>
  )
}}

export default InfoSection;