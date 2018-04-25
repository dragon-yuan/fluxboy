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
            <View style={{ flex: 1 }}>
                <Header
                    outerContainerStyles={{ backgroundColor: '#f5f5f5' }}
                    centerComponent={{ text: 'FluxBoy', style: { color: '#110c2e' } }}
                />
                <View style={{ height: 150, backgroundColor: '#3C3C52' }}>
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
                {/*<View style={{ marginTop: 10, backgroundColor: '#FFF', }}>*/}
                    {/*<TouchableOpacity*/}
                        {/*onPress={()=>{}}>*/}
                        {/*<View>*/}
                            {/*<ListItem*/}
                                {/*title={'设置'}*/}
                                {/*leftIcon={{name: 'settings'}}*/}
                            {/*/>*/}
                        {/*</View>*/}
                    {/*</TouchableOpacity>*/}
                {/*</View>*/}
                {/*<View style={ styles.imageIconsViewStyle }>*/}
                    {/*<View style={styles.btnViewStyle}>*/}
                        {/*<TouchableOpacity*/}
                            {/*onPress={()=>{this._onPress()}}>*/}
                        {/*<Image*/}
                            {/*source={require('../../../assets/img/mine/logo-me.png')}*/}
                            {/*style={styles.imageIconStyle}*/}
                            {/*onPress={()=>this._onPress()}*/}
                        {/*/>*/}
                        {/*</TouchableOpacity>*/}
                    {/*</View>*/}
                    {/*<View style={styles.btnViewStyle}>*/}
                        {/*<TouchableOpacity*/}
                            {/*onPress={()=>{this._onPress()}}>*/}
                        {/*<Image*/}
                            {/*source={require('../../../assets/img/mine/logo-message.png')}*/}
                            {/*style={styles.imageIconStyle}*/}
                        {/*/>*/}
                        {/*</TouchableOpacity>*/}
                    {/*</View>*/}
                    {/*<View style={styles.btnViewStyle}>*/}
                        {/*<TouchableOpacity*/}
                            {/*onPress={()=>{this._onPress()}}>*/}
                        {/*<Image*/}
                            {/*source={require('../../../assets/img/mine/logo-setting.png')}*/}
                            {/*style={styles.imageIconStyle}*/}
                        {/*/>*/}
                        {/*</TouchableOpacity>*/}
                    {/*</View>*/}
                {/*</View>*/}
                <View style={styles.footerStyle}>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
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
    }
})

