import axios from 'axios';
import { logout } from './authService';

const API_URL = 'http://127.0.0.1:8080/api';

export const getPublicResource = async () => {
  try {
    const response = await axios.get(`${API_URL}/resource/public`);
    return response.data;
  } catch (error) {
    console.error('error:', error);
    throw error;
  }
};

export const getUserResource = async () => {
    try {
      const response = await axios.get(`${API_URL}/resource/user`, {
        headers: {
          'Authorization': `Bearer ${localStorage.token}`,
          'Content-Type': 'application/json'
        }
      });
      if (response.status === 403) {
        logout();
        return;
      }
      return response.data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  export const getAdminResource = async () => {
    try {
      const response = await axios.get(`${API_URL}/resource/admin`, {
        headers: {
          'Authorization': `Bearer ${localStorage.token}`,
          'Content-Type': 'application/json'
        }
      });
      if (response.status === 403) {
        logout();
        return;
      }
      return response.data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };