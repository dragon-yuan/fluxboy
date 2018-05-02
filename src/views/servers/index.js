import React from "react";
import {connect} from "react-redux";
import {
    View, ScrollView, StyleSheet,
} from 'react-native';
import { Header, List, ListItem,} from 'react-native-elements';
import { fetchData } from '../../components/http/app';
import '../../components/http/setting';

class ServersScreen extends React.Component {

    constructor(props) {
        super(props);
        // 定义变量
        this.state = {
            apiList: [],
        }
        // 获取传参
        this.title = props.navigation.state.params.title;
        this.tag = props.navigation.state.params.tag;
        // 调用方法
        this._getUpTimeRobotApi(this.tag);
        // setInterval(()=>{
        //     this._testApi();
        // }, 15000);
    }

    // 调用接口
    _getUpTimeRobotApi(tag) {
        this.props._getUpTimeRobotApi({
            tag: tag
        }, (data) => {
            this.setState({
                apiList: data
            })
        });
    }

    _onGoToMain() {
        this.props.navigation.dispatch({
            type: 'Main',
            mode: 'reset',
        })
    }

    render() {
        let title = this.title;
        return (
            <View>
                <Header
                    placement="left"
                    leftComponent={{ icon: 'arrow-back', color: '#110c2e',
                        onPress: ()=> this._onGoToMain() }}
                    outerContainerStyles={{ backgroundColor: '#f5f5f5' }}
                    centerComponent={{ text: title, style: { color: '#110c2e', height: 18 } }}
                />
                <ScrollView contentContainerStyle={{ paddingVertical: 0, }}>
                    <List containerStyle={{ marginTop: 0, }}>
                        {
                            this.state.apiList.map((l, i) => (
                                <ListItem
                                    horizontal={true}
                                    roundAvatar
                                    key={i}
                                    title={l.friendlyName}
                                    titleStyle={[l.serverStatue === 'up' ? styles.textGreen : styles.textRed]}
                                    rightTitle={l.averageResponseTime}
                                    rightTitleStyle={
                                        [parseFloat(l.averageResponseTime) <= 200 ? styles.textGreen : parseFloat(l.averageResponseTime) <= 500 ? styles.textYellow : styles.textRed]
                                    }
                                />
                            ))
                        }
                    </List>
                    <View style={{height: 70}}></View>
                </ScrollView>
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
        _getUpTimeRobotApi: (body, successMethod) => {
            dispatch(fetchData({
                body,
                method: 'POST',
                api: '/api/robot/getMonitors/' + body.tag,
                success: (data) => {
                    successMethod(data)
                }
            }))
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ServersScreen);

const styles = StyleSheet.create({
    textGreen: {
       color: 'green'
    },
    textYellow: {
        color: 'orange'
    },
    textRed: {
        color: 'red'
    }
});