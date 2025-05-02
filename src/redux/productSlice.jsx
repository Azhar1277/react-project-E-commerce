import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products:[],
  searchTerm:'',
  filteredData:[],

}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts(state,action){
        state.products = action.payload
   
  },

  setSearchTerm(state,action){
    state.searchTerm=action.payload;
    state.filteredData = state.products.filter((product)=>
       product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
    

  }
  
}
})

// Action creators are generated for each case reducer function
export const {setProducts,setSearchTerm} = productSlice.actions

export default productSlice.reducer