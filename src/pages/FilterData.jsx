import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'

const FilterData = () => {
    const filterProducts=useSelector(state => state.product.filteredData)
  return (

    <div>

    <div className='products'>
        {filterProducts.length > 0 ?
        
       
    <div>
     
      <h2>Shop</h2>
    
      <div className='product-container'>
      {filterProducts.map(((product)=>(
       
       <ProductCard product={product} key={product.name}/>
        
      )))}
       </div>
       </div>
       :
       <div>
        <p>product is not available</p>

       </div>

        
    }


     
     </div>
     
        
    
      
      
    
    
     
    
    
        </div>
      )
    }
    
  




export default FilterData