import { createSlice } from '@reduxjs/toolkit'
import { FaTrashRestoreAlt } from 'react-icons/fa'

const initialState = {
  products:localStorage.getItem('products')?JSON.parse(localStorage.getItem('products'))
  :[],
  totalQuantity:0,
  totalPrice:0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state,action){
      const newItem = action.payload;
      const itemIndex= state.products.find((item)=>item.id === newItem.id)
      if(itemIndex){
        itemIndex.quantity++;
        itemIndex.totalPrice += newItem.price;
      }
      else{
 
        state.products.push({

          id:newItem.id,
          name:newItem.name,
          price:newItem.price,
          quantity:1,
          totalPrice:newItem.price,
          Image:newItem.Image
        })

        localStorage.setItem('products',JSON.stringify(state.products))


      }
      state.totalPrice +=newItem.price;
      state.totalQuantity++
    },

    removeFromCart(state,action){
      const Id = action.payload;
      const findItem= state.products.find((item)=>item.id === Id)
     if(findItem){
      state.totalPrice -= findItem.totalPrice
      state.totalQuantity -= findItem.quantity
      state.products = state.products.filter((item)=>item.id !== Id)
      localStorage.setItem('products',JSON.stringify(state.products))


  }
    },

    increaseQuantity(state,action){
      const Id= action.payload;
      const findItem=state.products.find((item)=>item.id === Id)
      if(findItem){
        findItem.quantity++;
        findItem.totalPrice += findItem.price;
        state.totalQuantity++;
        state.totalPrice += findItem.price

      }
      localStorage.setItem('products',JSON.stringify(state.products))

    },

    decreaseQuantity(state,action){
      const Id= action.payload;
      const findItem= state.products.find((item)=>item.id === Id)
      if(findItem.quantity > 1){

      
      if(findItem){

        findItem.quantity--;
        findItem.totalPrice -= findItem.price;
        state.totalQuantity--;
        state.totalPrice -= findItem.price;



      }
      localStorage.setItem('products',JSON.stringify(state.products))

      }

    }
  
    
},
})

// Action creators are generated for each case reducer function
export const {addToCart,removeFromCart,increaseQuantity,decreaseQuantity}= cartSlice.actions
export default cartSlice.reducer