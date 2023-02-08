import { configureStore } from '@reduxjs/toolkit'
import AddressSlice from './slice/AddressSlice';
import ServiceSlice from './slice/ServiceSlice';
import ShopSlice from './slice/ShopSlice';

const store = configureStore({
  reducer: {
    address: AddressSlice,
    shop: ShopSlice,
    service: ServiceSlice
  }
})

export default store;
