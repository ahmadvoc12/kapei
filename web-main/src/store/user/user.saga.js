import { put, takeEvery, all, call } from 'redux-saga/effects';
import { SET_STATE as USER_SET_STATE, LOGIN } from '@/store/user/user.types';

import { login as loginService } from '@/services/user';

export function* login({ payload }) {
	const { username, password } = payload;

	yield put({
		type: USER_SET_STATE,
		payload: {
			loading: true
		}
	});

	const { data } = yield call(loginService, username, password);

	if (data) {
		const userData = {
			id: data.id,
			username: data.username,
			fullName: data.fullName
		};

		const accessToken = data.access_token;

		localStorage.setItem('user', JSON.stringify(userData));
		localStorage.setItem('accessToken', accessToken);

		yield put({
			type: USER_SET_STATE,
			payload: {
				...userData,
				authorized: true,
				loading: false
			}
		});
	}
}

export default function* rootSaga() {
	yield all([takeEvery(LOGIN, login)]);
}
