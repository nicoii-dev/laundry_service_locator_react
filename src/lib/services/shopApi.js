/* eslint-disable import/no-anonymous-default-export */
import apiService from "./axios";

export default {
  getAllShops: (payload) => apiService.get(`/shops`, payload),
  getUserShops: (id) => apiService.post(`/shops/user/${id}`),
  createShop: (payload) => apiService.post(`/shops/create`, payload),
  viewShop: (id) => apiService.get(`/shops/view/${id}`),
  updateShop: (id, payload) => apiService.put(`/shops/update/${id}`, payload),
  deleteShop: (id) => apiService.post(`/shops/delete/${id}`),

  //   verifyEmail: (token, payload) => {
  //     apiService.post(`/auth/verify-email`, payload, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //   },
};
