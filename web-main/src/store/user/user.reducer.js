import { SET_STATE } from '@/store/user/user.types';

const INITIAL_STATE = {
	id: '',
	username: '',
	fullName: '',
	avatar: '',
	authorized: false,
	loading: false
};

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_STATE:
			return {
				...state,
				...action.payload
			};
		default:
			return state;
	}
};

export default reducer;
