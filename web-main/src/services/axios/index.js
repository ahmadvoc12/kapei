import axios from 'axios';

const apiClient = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL
});

apiClient.interceptors.request.use((request) => {
	if (request.url === '/auth/login') return request;

	const accessToken = localStorage.getItem('accessToken');

	if (accessToken) request.headers.Authorization = `Bearer ${accessToken}`;

	return request;
});

export default apiClient;
