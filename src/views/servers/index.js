import React from "react";
import {connect} from "react-redux";
import {
    View,
} from 'react-native';
import { Header, List, ListItem,} from 'react-native-elements';

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
        // 获取传参
        this.title = props.navigation.state.params.title;
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
                <List containerStyle={{marginBottom: 20}}>
                    {
                        list.map((l, i) => (
                            <ListItem
                                roundAvatar
                                key={i}
                                title={l.name}
                                badge={{ value: l.times, textStyle: { color: 'green' }, containerStyle: { backgroundColor: '#FFF' } }}
                            />
                        ))
                    }
                </List>
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

export default connect(mapStateToProps, mapDispatchToProps)(ServersScreen);