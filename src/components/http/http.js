import * as ActionTypes from './actionType';
import { HOST, DEBUG } from './setting';
import { Platform, } from 'react-native';
import Toast from '../../utils/toast';
import Storage from './storage';
import md5 from 'md5';

const https = []

export default store => next => action => {

	if (action.type !== ActionTypes.ACTION_FETCH_DATA) {
		return next(action);
	}

	const {
		api,
		body = {},
		success,
		cache = false,
		method,
		successToast = false,
		msg = '提示信息不能为空',
		headers = {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		}
	} = action.payload;

	if (!api) throw new Error(' throw api should not be empty exception');

	if (!method) throw new Error(' throw method should not be empty exception');

	// http header
    const { app } = store.getState();
    const user = app.get('user');
    console.info('http -> init user = ', store.getState());

	const _tBody = { ...body};
	const tBody = getSortMap(_tBody);

	const _body = { ...tBody };

	const fullPath = api.indexOf('http') === -1 ? (HOST + api) : api;
	if (DEBUG) console.log('%c the request url is ', 'color:red', fullPath);

	const paramsDic = { ..._body };


	headers.client_type = Platform.OS === 'ios' ? 2 : 1;
    headers.Authorization = user.token ? 'Bearer '+ user.token : '';

	let options = { method, headers, body, }

	if (DEBUG) console.log('%c params is ', 'color:red', paramsDic);

	const id = md5(JSON.stringify({api, paramsDic}));

	https.push({
		api,
		date: new Date().getTime()
	})

	Storage.get(id).then(() => {
		fetchData(fullPath, options, next, app).then(response => {
			if (successToast) Toast.show(msg);
			if (success) success(response);
			if (cache) {
				Storage.save(id, {response, storageTime: new Date().getTime()});
			}
		}, failed => {
		}).catch(error => Toast.show(error))
		.finally(() => {
		});
	});
};

function fetchData (fullPath, { body, method, headers }, next, app) {

	if (method === 'GET') {
		fullPath += `?${ body }`;
	}

	return new Promise((resolve, reject) => {
		fetch(fullPath, {
			method,
			headers,
			body: method === 'GET' ? null : JSON.stringify(body)
		}).then(response => {
			return response.json();
		}).then(responseData => {
			if (DEBUG) console.log('%c server response is ', 'color:red', responseData);
			if (responseData.code === 200) {
				resolve(responseData.result)
			} else {
				reject(responseData.message)
				if (responseData.message) Toast.show(responseData.message)
			}
		}).catch(error => reject(error));
	});
}

function getSortMap(obj) {
	const keys = Object.keys(obj).sort();
	const map = {};
	Object.keys(obj).forEach((key, index) => {
		map[keys[index]] = obj[keys[index]];
	});
	return map;
}


