import apiClient from '@/services/axios';

const login = async (username, password) => {
	try {
		const response = await apiClient.post('/auth/login', {
			username,
			password
		});

		if (response) {
			const { access_token: accessToken } = response.data.data;

			if (accessToken) {
				localStorage.setItem('accessToken', accessToken);
				return response.data;
			}

			return false;
		}

		return false;
	} catch (e) {
		console.error(e);
	}
};

export { login };
