import React from "react";
import {connect} from "react-redux";
import {
    View, Image, StyleSheet, TextInput, Dimensions, Platform
} from 'react-native';
import Button from '../../components/common/button';
// HTTP请求
import { fetchData, loadUser } from '../../components/http/app';
import '../../components/http/setting';
// 获取移动端屏幕宽度
const { width } = Dimensions.get('window');
// 弹窗
import Toast from '../../utils/toast';
// 加密
import encrypt from "../../utils/encrypt";
// 用户信息
import User from '../../models/user';

class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        this._loginPress = this._loginPress.bind(this);
    }

    _loginPress() {
        if ((this.state.username + '').trim().length < 1) return Toast.show('请输入账号');
        if ((this.state.password + '').trim().length < 1) return Toast.show('请输入密码');
        this.props.loginGetSecretKey({}, (secretKey)=> {
            // 对登录信息进行加密
            const secretUserName = encrypt.aesEncrypt(this.state.username, secretKey, secretKey);
            const secretPassword = encrypt.aesEncrypt(this.state.password, secretKey, secretKey);
            // 登录
            this.props.login({
                loginName: secretUserName,
                loginPwd: secretPassword,
                systemId: Platform.OS === 'ios' ? 'ios' : 'android',
                secretToken: secretKey,
                tokenKey: ''
            }, this.props.navigation)
        }, (fail)=>{})
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#F3F3F6' }}>
                <View style={styles.headerStyle}>
                    <Image source={require('../../../assets/img/login/login-head.png')}
                    style={styles.headerImgStyle}/>
                </View>
                <View style={styles.inputViewStyle}>
                    <TextInput
                        style={styles.inputStyle}
                        /*是否多行输入*/
                        multiline={false}
                        /*表示软键盘返回键显示的字符串*/
                        returnKeyType='done'
                        /*使用软键盘类型*/
                        keyboardType='numeric'
                        placeholder='请输入账号'
                        value={this.state.username}
                        /*用来定义输入提示下划线的颜色。如果将它的颜色设为与 TextInput 组件的背景色一样，即可以隐藏输入提示下划线*/
                        underlineColorAndroid='transparent'
                        onChangeText={(text) => this.setState({username: text})}
                    />
                    <TextInput
                        /*密码框*/
                        secureTextEntry={true}
                        multiline={false}
                        style={styles.inputStyle}
                        placeholder='请输入密码'
                        value={this.state.password}
                        underlineColorAndroid='transparent'
                        onChangeText={(text) => this.setState({password: text})}
                    />
                </View>
                <View style={styles.loginBtnViewStyle}>
                    <Button
                        title='登录'
                        style={styles.loginBtnStyle}
                        textStyle={styles.btnText}
                        onPress={this._loginPress}/>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { user, app } = state;
    return {
        user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        loginGetSecretKey: (body, success, fail) => {
            dispatch(fetchData({
                body,
                api: '/api/uac/auth/token/getSecretToken',
                method: 'POST',
                success: (data) => {
                    success(data);
                },
                fail: (result) => {
                    fail(result);
                },
            }))
        },
        login: (body, navigation) => {
            dispatch(fetchData({
                body,
                api: '/api/uac/auth/login/login',
                msg: '登录成功',
                method: 'POST',
                successToast: true,
                success: (data) => {
                    // 信息存入storage
                    const user = new User({
                        id: data.id,
                        serialNo: data.serialNo,
                        loginName: data.loginName,
                        roleName: data.roleName,
                        token: data.token,
                    });
                    // 登录存入数据。暂时未理解
                    dispatch(loadUser(user));
                    user.save();
                    // 页面跳转
                    navigation.dispatch({
                        type: 'Main',
                        mode: 'reset',
                    })
                },
                fail: (result) => {
                },
            }))
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

const styles = StyleSheet.create({
    headerStyle: {
        marginTop: 100,
        alignItems:'center', // 居中展示
        justifyContent:'center',
        width:null,
        height:null,
    },
    headerImgStyle: {
        width: 65,
        height: 65,
    },
    inputViewStyle: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputStyle: {
        marginTop: 17,
        height: 40,
        width: width - width / 5,
        borderColor: '#E1E1E1',
        borderWidth: 1,
        borderRadius: 8,
        fontWeight: 'bold',
        color: '#333',
    },
    loginBtnViewStyle: {
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginBtnStyle: {
        backgroundColor: '#374DEF',
        margin: 5,
        padding: 5,
        borderRadius: 12,
        width: width - width / 5,
        borderWidth: 0,
    },
    btnText: {
        fontSize: 16,
        color: '#FFF'
    }
})
