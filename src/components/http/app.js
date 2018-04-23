import * as ActionTypes from './actionType';

export function fetchData(params) {
	return {
		type: ActionTypes.ACTION_FETCH_DATA,
		payload: params
	};
}