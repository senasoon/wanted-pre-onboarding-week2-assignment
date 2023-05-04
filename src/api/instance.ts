import axios from 'axios';

const api = axios.create({ headers: { 'Content-Type': 'application/json', 'Cache-Control': 'max-age=31536000' } });

export default api;
