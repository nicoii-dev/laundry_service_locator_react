import { configureStore } from '@reduxjs/toolkit'
import AddressSlice from './slice/AddressSlice';

const store = configureStore({
  reducer: {
    address: AddressSlice
  }
})

export default store;
