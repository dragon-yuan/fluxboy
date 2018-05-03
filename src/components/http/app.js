import * as ActionTypes from './actionType';

export function fetchData(params) {
	return {
		type: ActionTypes.ACTION_FETCH_DATA,
		payload: params
	};
}

export function loadUser(user) {
    return {
        type: ActionTypes.LOAD_USER,
        payload: user
    }
}