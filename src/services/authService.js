import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/authenticate`, { email, password });
    if (response.data.token) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    console.log(response.status);
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};