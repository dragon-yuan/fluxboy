import React from "react";
import {
    View, Text, Dimensions, Image, StyleSheet, TouchableOpacity, Alert
} from 'react-native';
import { Avatar, Header, Icon, Button, ListItem, } from 'react-native-elements';
// 获取移动端屏幕宽度
const { width } = Dimensions.get('window');
import Storage from '../../utils/storage'
import User from "../../models/user";
import {fetchData} from "../../components/http/app";
import {connect} from "react-redux";
import Toast from '../../utils/toast';

class MineScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loginName: '',
            roleName: '',
        }
        Storage.get('user').then(result => {
            this.setState({loginName: result.loginName});
            this.setState({roleName: result.roleName});
        });
        this._logoutPress = this._logoutPress.bind(this);
        this._aboutPress = this._aboutPress.bind(this);
    }

    // 登出接口
    _logoutPress() {
        Alert.alert(
            '提示',
            '确定退出吗',
            [
                { text: '稍后', onPress: () => {}, style: 'cancel' },
                { text: '退出', onPress: () => {
                        this.props.logout({}, this.props.navigation, (fail)=>{});
                }},
            ]
        );
    }

    // 关于页面跳转
    _aboutPress() {
        this.props.navigation.dispatch({
            type: 'AboutScreen',
            mode: 'reset',
            params: {title: '关于'}
        })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header
                    outerContainerStyles={{ backgroundColor: '#f5f5f5' }}
                    centerComponent={{ text: 'FluxBoy', style: { color: '#110c2e' } }}
                />
                <View style={styles.myInfoStyle}>
                    <Avatar
                        large
                        rounded
                        source={{uri: "https://img-dragon-resume.oss-cn-beijing.aliyuncs.com/app-fluxboy/head-9t.jpeg"}}
                        activeOpacity={0.7}
                        containerStyle={{ marginTop: 70, marginLeft: 20 }}
                    />
                    <Text style={{ color: '#FFF', fontWeight: 'bold',
                        marginLeft: 111, marginTop: -61, fontSize: 17, }}>
                        {this.state.loginName}
                    </Text>
                    <Text style={{ color: '#FFF', marginLeft: 110, marginTop: 6,
                        fontSize: 15, }}>
                        {this.state.roleName}
                    </Text>
                    <Icon
                        name='md-pulse'
                        type='ionicon'
                        color='#FFF'
                        size={35}
                        iconStyle={{ alignSelf: 'flex-end', marginRight: 20, marginTop: -40 }}
                    />
                    <Icon
                        name='md-pulse'
                        type='ionicon'
                        color='#FFF'
                        size={35}
                        iconStyle={{ alignSelf: 'flex-end', marginRight: 50, marginTop: -40 }}
                    />
                    <Icon
                        name='md-pulse'
                        type='ionicon'
                        color='#FFF'
                        size={35}
                        iconStyle={{ alignSelf: 'flex-end', marginRight: 80, marginTop: -40 }}
                    />
                </View>
                <View style={{ backgroundColor: '#FFF', }}>
                    <TouchableOpacity
                        disabled={true} style={{backgroundColor: '#F5F5F5'}}>
                        <View>
                            <ListItem
                                title={'设置'}
                                leftIcon={{name: 'settings'}}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>{this._aboutPress()}}>
                        <View>
                            <ListItem
                                title={'关于'}
                                leftIcon={{name: 'error-outline'}}
                            />
                        </View>
                    </TouchableOpacity>
                    <View>
                        <ListItem
                            title={'版本'}
                            leftIcon={{name: 'equalizer'}}
                            rightTitle={'v1.0.0'}
                            rightTitleStyle={{color: '#696969'}}
                            hideChevron
                        />
                    </View>
                    <TouchableOpacity
                        onPress={()=>{this._logoutPress()}}>
                        <View>
                            <ListItem
                                title={'退出'}
                                leftIcon={{name: 'settings-power'}}
                                hideChevron
                            />
                        </View>
                    </TouchableOpacity>
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
        logout: (body, navigation) => {
            dispatch(fetchData({
                body,
                api: '/api/uac/auth/login/logout',
                msg: '退出成功',
                method: 'POST',
                successToast: true,
                success: (data) => {
                    if (data) {
                        console.log('logout ', new User());
                        new User().delete();
                        // 页面跳转
                        navigation.dispatch({
                            type: 'Login',
                            mode: 'reset',
                        })
                    } else {
                        Toast.show('退出失败');
                    }
                },
                fail: (result) => {
                    Toast.show(result);
                },
            }))
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MineScreen);


const styles = StyleSheet.create({
    myInfoStyle: {
        height: 210,
        backgroundColor: '#18A3FA',
    },
    imageIconsViewStyle: {
        backgroundColor: '#3C3C52',
        height: 100,
        flexDirection: 'row' // 将元素在一行上显示(横向排列)
    },
    dataLineViewStyle: {
        height: 20,
    },
    dataViewStyle: {
        marginTop: 15,
        height: 186,
        flexDirection: 'row'
    },
    dataViewContentStyle: {
        height: 186,
        backgroundColor: '#3C435F',
        width: width / 2 - 20,
        marginLeft: 12,
        borderRadius: 10,
    },
    dataTextStyle: {
        color: '#F0F8FF',
        marginTop: 4,
        marginLeft: 16,
        fontSize: 14,
        fontWeight: 'bold',
    },
    lineStyle: {
        backgroundColor: '#47B9B2',
        width: 125,
        height: 3,
        marginTop: 3,
        marginLeft: 17,
    },
    dataTitleStyle: {
        color: '#F0FFFF',
        fontSize: 13,
        marginLeft: 15,
        marginTop: 160,
        position: 'absolute'
    },
    dataBoxStyle: {
        marginLeft: 15,
        marginTop: 115,
        position: 'absolute',
        flexDirection: 'row',
    },
    dataServerStyle: {
        // #F64714
        color: '#FFF',
        fontSize: 32,
    },
    dataUnitStyle: {
        color: '#FFF',
        fontSize: 11,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 3,
    },
    dataImgViewStyle: {
        height: 50,
        marginTop: 15,
    },
    dataImgStyle: {
        width: 50,
        height: 50,
        marginLeft: 15,
    },
    btnViewStyle: {
        marginTop: 10,
    },
    someButtonStyle: {
        borderRadius: 5,
        // #483D80
        backgroundColor: '#3C435F',
    }
})

