import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   value: 0,
// }

export const homeSlice = createSlice({
  name: 'home',
  initialState : 
  {
    url:{},
    generes:{},

  },
  reducers: {
   getApiConfiguration: (state,action) => {
    state.url = action.payload;
   },
//    . In Redux, the payload property of an action 
// typically contains the data needed to update the state.
   getGeneres:(state,action) => {
    state.generes = action.payload;

   }
  },
})

// Action creators are generated for each case reducer function
export const { getApiConfiguration, getGeneres } = homeSlice.actions

export default homeSlice.reducer