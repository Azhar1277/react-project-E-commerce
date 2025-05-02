import React from 'react'
import './category.css'
import Men from "../assets/Images/Men/men.jpg"
import Women from '../assets/Images/Women/women.jpg'
import Children from '../assets/Images/Children/child.jpg'

  


const CategorySection = () => {
    const Categories=[

        {
            title:"men",
            ImageUrl:Men,
    
        },
        
        {
            title:"women",
            imageUrl:Women,
    
        },
        
        {
            title:"Child",
            ImageUrl:Children,
    
        },
    ];
    
   
 return (
    <div>


  
    <div className='info-cards'>
        


        <div className='info-card'>

        {Categories?.map((item,index)=>{
            
    <div key={index} className='cardd'>
        <img src={item.imageUrl} alt="" />
         <div>
    <p>{item.title}</p>
    <p>View All</p>

       </div>

    </div>

  })}

        </div>
    
 
    </div>
    </div>
    
  )
}

export default CategorySection