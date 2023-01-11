import axios from 'axios';
import { useAuthStore } from '../store/auth';

const authapi = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
});

authapi.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  config.headers = {
    Authorization: `Bearer ${token}`,
  };
  return config;
});

export default authapi;
