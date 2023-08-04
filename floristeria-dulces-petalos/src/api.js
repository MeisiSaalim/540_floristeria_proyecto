import axios from 'axios';

const API_URL = 'https://dulces-petalos.herokuapp.com';

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/product`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProductDetail = async (productId) => {
  try {
    const response = await axios.get(`${API_URL}/api/product/${productId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
