import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import userReducer from './user/user.reducer';

export default (history) =>
	combineReducers({
		router: connectRouter(history),
		user: userReducer
	});
