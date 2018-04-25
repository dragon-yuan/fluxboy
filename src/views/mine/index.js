import React from "react";
import {
    View, Text, Dimensions, Image, StyleSheet, TouchableOpacity
} from 'react-native';
import { Avatar, Header, Icon, } from 'react-native-elements';
// 获取移动端屏幕宽度
const { width } = Dimensions.get('window');
import Toast from '../../utils/toast';

export default class MineScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    _onPress() {
        Toast.show("功能正在开发中");
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#3C3C52' }}>
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
                        containerStyle={{ marginTop: 40, marginLeft: 20 }}
                    />
                    <Text style={{ color: '#FFF', fontWeight: 'bold',
                        marginLeft: 111, marginTop: -61, fontSize: 17, }}>admin</Text>
                    <Text style={{ color: '#FFF', marginLeft: 110, marginTop: 6,
                        fontSize: 15, }}>系统管理员</Text>
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
                <View style={styles.dataLineViewStyle}>
                    <Text style={styles.dataTextStyle}>Data Statistics</Text>
                    <View style={styles.lineStyle}></View>
                </View>
                <View style={styles.dataViewStyle}>
                    <View style={styles.dataViewContentStyle}>
                        <Text style={styles.dataTitleStyle}>监控服务总数</Text>
                        <Text style={styles.dataServerStyle}>36</Text>
                    </View>
                    <View style={styles.dataViewContentStyle}>
                        <Text style={styles.dataTitleStyle}>服务波动总数</Text>
                    </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    myInfoStyle: {
        marginTop: 10,
        height: 150,
        backgroundColor: '#3C435F',
        width: width - 24,
        marginLeft: 12,
        borderRadius: 10,
    },
    imageIconsViewStyle: {
        backgroundColor: '#3C3C52',
        height: 100,
        flexDirection: 'row' // 将元素在一行上显示
    },
    btnViewStyle: {
        width: width / 3,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageIconStyle: {
        width: 54,
        height: 54,
        borderRadius: 27,
        overflow: 'hidden'
    },
    footerStyle: {
        height: 500,
        // #FE85A2
        // #F64714
        backgroundColor: '#848484'
    },
    dataLineViewStyle: {
        height: 20,
    },
    dataViewStyle: {
        marginTop: 15,
        height: 200,
        flexDirection: 'row'
    },
    dataViewContentStyle: {
        height: 200,
        backgroundColor: '#3C435F',
        width: width / 2 - 20,
        marginLeft: 12,
        borderRadius: 10,
    },
    dataTextStyle: {
        color: '#AAADB4',
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
        color: '#707488',
        fontSize: 13,
        marginLeft: 15,
        marginTop: 175,
    },
    dataServerStyle: {
        color: '#FFF',
        fontSize: 30,
        marginLeft: 15,
        marginTop: -60,
    }
})

