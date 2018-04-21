import React from "react";
import { connect } from 'react-redux';
import { ListItem, Header, Tile } from 'react-native-elements';
import { View, TouchableOpacity } from 'react-native';
class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    // TouchableOpacity点击事件
    _onPress(key) {
        // 页面跳转
        if ('test' == key) {
            this.props.navigation.dispatch({
                type: 'ServersScreen',
                mode: 'reset',
                params: {tag: 'test', title: '测试环境服务列表'}
            })
        } else if ('beta' == key) {

        } else if ('prod' == key) {

        }
    }
    render() {
        return (
            <View>
                <Header
                    outerContainerStyles={{ backgroundColor: '#f5f5f5' }}
                    centerComponent={{ text: 'FluxBoy', style: { color: '#110c2e' } }}
                />
                <Tile
                    imageSrc={{ uri: 'https://img-dragon-resume.oss-cn-beijing.aliyuncs.com/banner-net.png' }}
                    title="应用服务"
                    caption="环境监控列表"
                    featured
                />
                <TouchableOpacity
                    onPress={()=>{this._onPress('test')}}>
                    <View>
                        <ListItem
                            title={'测试环境'}
                            leftIcon={{name: 'title'}}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{this._onPress.bind(this, 'beta')}}>
                    <View>
                        <ListItem
                            title={'预生产环境'}
                            leftIcon={{name: 'format-bold'}}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{this._onPress.bind(this, 'prod')}}>
                    <View>
                        <ListItem
                            title={'生产环境'}
                            leftIcon={{name: 'local-parking'}}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { app } = state;
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);