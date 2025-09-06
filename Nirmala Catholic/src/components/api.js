// src/api/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://school-demo-project.onrender.com/api', 
});

export default api; 
