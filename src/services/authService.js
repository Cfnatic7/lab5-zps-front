import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/authenticate`, { email, password });
    if (response.data.token) {
      console.log(response.data.token)
      localStorage.setItem('token', response.data.token);
    }
    console.log(response.status);
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const logout = () => {
  localStorage.setItem('token', undefined);
}

export const register = async (firstName, lastName, email, password) => {
    try {
      const response = await axios.post(`${API_URL}/auth/register`, {firstName, lastName, email, password });
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
      console.log(response.status);
      return response.data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };