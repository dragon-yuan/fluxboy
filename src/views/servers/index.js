import React from "react";
import {connect} from "react-redux";
import {
    View, ScrollView,
} from 'react-native';
import { Header, List, ListItem,} from 'react-native-elements';
import { fetchData } from '../../components/http/app';

const list = [
    {
        name: 'otc-test.xianyiscm.com',
        times: '30ms',
    },
    {
        name: 'ctc-test.xianyiscm.com',
        times: '33ms',
    },
]


class ServersScreen extends React.Component {

    constructor(props) {
        super(props);
        // 定义变量
        this.state = {
            apiList: [],
        }
        // 获取传参
        this.title = props.navigation.state.params.title;
        // 调用方法
        this._testApi();
    }

    // 调用接口
    _testApi() {
        this.props.testApi({
            // body
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
                                    title={l.message}
                                    badge={{ value: l.id, textStyle: { color: 'green' }, containerStyle: { backgroundColor: '#FFF' } }}
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
        testApi: (body, successMethod) => {
            dispatch(fetchData({
                body,
                method: 'POST',
                api: '/api/getFacebook',
                success: (data) => {
                    successMethod(data.list)
                }
            }))
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ServersScreen);