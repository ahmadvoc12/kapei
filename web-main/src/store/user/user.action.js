import { SET_STATE, GET_USER, LOGIN } from '@/store/user/user.types';

export const setState = () => {
	return {
		type: SET_STATE
	};
};

export const getUser = () => {
	return {
		type: GET_USER
	};
};

export const login = (username, password) => {
	return {
		type: LOGIN,
		payload: {
			username,
			password
		}
	};
};
