import {createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState:[],
  
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addUsers: (state, action) => {
      state = [...state, action.payload];
      return state;
    },
   
  
  },
});

export const { addUsers } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUser = (state) => state.user;


export default userSlice.reducer;
