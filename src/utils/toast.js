import Toast from 'react-native-root-toast';

class ToastUtils {

	show(msg) {
		Toast.show(msg, { position: Toast.positions.CENTER });
	}

}

export default new ToastUtils();