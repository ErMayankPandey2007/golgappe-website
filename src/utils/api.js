import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';

const authHeader = () => ({ Authorization: `Bearer ${localStorage.getItem('gg_token')}` });

export const getAvailableProducts = async () => {
    return axios.get(`${API_URL}/products/available`);
};

export const loginUser = (data) => axios.post(`${API_URL}/auth/login`, data);
export const registerUser = (data) => axios.post(`${API_URL}/auth/direct-register`, data);
export const sendOtp = (mobile) => axios.post(`${API_URL}/auth/send-otp`, { mobile });
export const otpLogin = (data) => axios.post(`${API_URL}/auth/otp-login`, data);

export const createOrder = (data) => axios.post(`${API_URL}/orders`, data, { headers: authHeader() });
export const getMyOrders = () => axios.get(`${API_URL}/orders/my-orders`, { headers: authHeader() });

export const validateOffer = (code, orderAmount, productId) => 
  axios.post(`${API_URL}/offers/validate`, { code, orderAmount, productId }, { headers: authHeader() });

export const applyOffer = (code, orderAmount, productId) => 
  axios.post(`${API_URL}/offers/apply`, { code, orderAmount, productId }, { headers: authHeader() });

export const applyOfferToProduct = (productId, quantity) => 
  axios.post(`${API_URL}/offers/apply-product`, { productId, quantity }, { headers: authHeader() });
