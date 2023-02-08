import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shopAddress: {
    street: '',
    barangay: '',
    city: '',
    province: '',
    zipcode: '',
    location: {
        lat: '',
        lng: ''
    },
  },
};

const ShopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setShop: (state, action) => ({
      ...state,
      shopAddress: action.payload,
    }),
    removeShop: (state, action) => ({
      ...state,
      shopAddress: {},
    }),
  },
});
export const { setShop, removeShop } = ShopSlice.actions;
export default ShopSlice.reducer;
