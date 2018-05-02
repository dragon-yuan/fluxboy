import Immutable from 'immutable';
import Storage from '../utils/storage';

const UserRecord = Immutable.Record({
	id: null,
    serialNo: null,
	loginName: null,
	roleName: null,
	token: null,
}, 'User');

class User extends UserRecord {
	save() {
		Storage.save('user', this.toJS());
	}
	async merge(user) {
		const _user = await Storage.get('user');
		const newUser = Immutable.Map(_user).merge(user);
		Storage.save('user', newUser);
	}
	delete() {
		Storage.remove('user');
	}
}

export default User;
