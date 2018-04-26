import React from "react";
import {
    View, Text, Dimensions, Image, StyleSheet, TouchableOpacity
} from 'react-native';
import { Avatar, Header, Icon, Button, } from 'react-native-elements';
// 获取移动端屏幕宽度
const { width } = Dimensions.get('window');

export default class MineScreen extends React.Component {

    constructor(props) {
        super(props);
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
                        <View style={styles.dataImgViewStyle}>
                            <Image source={require('../../../assets/img/mine/bot2.png')}
                                   style={styles.dataImgStyle} />
                        </View>
                        <View style={styles.dataBoxStyle}>
                            <Text style={styles.dataServerStyle}>36</Text>
                            <Text style={styles.dataUnitStyle}>num</Text>
                        </View>
                        <Text style={styles.dataTitleStyle}>监控服务总数</Text>
                    </View>
                    <View style={styles.dataViewContentStyle}>
                        <View style={styles.dataImgViewStyle}>
                            <Image source={require('../../../assets/img/mine/bot1.png')}
                                   style={styles.dataImgStyle} />
                        </View>
                        <View style={styles.dataBoxStyle}>
                            <Text style={styles.dataServerStyle}>8</Text>
                            <Text style={styles.dataUnitStyle}>times</Text>
                        </View>
                        <Text style={styles.dataTitleStyle}>服务波动总数</Text>
                    </View>
                </View>
                <View style={styles.btnViewStyle}>
                    <Button raised title='退出' buttonStyle={styles.someButtonStyle}/>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    myInfoStyle: {
        marginTop: 10,
        height: 150,
        backgroundColor: '#483D8B',
        width: width - 24,
        marginLeft: 12,
        borderRadius: 10,
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
        backgroundColor: '#483D8B',
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
        marginTop: 15,
    },
    someButtonStyle: {
        borderRadius: 5,
        backgroundColor: '#483D8B',
    }
})

