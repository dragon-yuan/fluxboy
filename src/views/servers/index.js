import React from "react";
import {connect} from "react-redux";
import {
    Text, View,
} from 'react-native';
import { Header, } from 'react-native-elements';

class ServersScreen extends React.Component {
    constructor(props) {
        super(props);
        // 获取传参
        this.title = props.navigation.state.params.title;
    }

    render() {
        let title = this.title;
        return (
            <View>
                <Header
                    outerContainerStyles={{ backgroundColor: '#f5f5f5' }}
                    centerComponent={{ text: {title}, style: { color: '#110c2e' } }}
                />
                <Text>sss</Text>
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