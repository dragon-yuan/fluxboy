import React from "react";
import {
    View, Text,
} from 'react-native';
import { Avatar, Header, Icon } from 'react-native-elements';

export default class MeScreen extends React.Component {
    render() {
        return (
            <View>
                <Header
                    outerContainerStyles={{ backgroundColor: '#f5f5f5' }}
                    centerComponent={{ text: 'FluxBoy', style: { color: '#110c2e' } }}
                />
                <View style={{ height: 160, backgroundColor: '#E2AF53' }}>
                    <Avatar
                        large
                        rounded
                        source={{uri: "https://img-dragon-resume.oss-cn-beijing.aliyuncs.com/app-fluxboy/head-9t.jpeg"}}
                        activeOpacity={0.7}
                        containerStyle={{ marginTop: 40, marginLeft: 20 }}
                    />
                    <Text style={{ color: '#FFF', fontWeight: 'bold',
                        marginLeft: 113, marginTop: -61, fontSize: 17, }}>admin</Text>
                    <Text style={{ color: '#FFF', marginLeft: 112, marginTop: 6,
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
            </View>
        );
    }
}
