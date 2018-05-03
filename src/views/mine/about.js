import React from "react";
import {
    View, Text, StyleSheet
} from 'react-native';
import { Header, } from 'react-native-elements';
import {connect} from "react-redux";

class AboutScreen extends React.Component {

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
            <View style={{ flex: 1 }}>
                <Header
                    placement="left"
                    leftComponent={{ icon: 'arrow-back', color: '#110c2e',
                        onPress: ()=> this._onGoToMain() }}
                    outerContainerStyles={{ backgroundColor: '#f5f5f5' }}
                    centerComponent={{ text: title, style: { color: '#110c2e', height: 18 } }}
                />
                <View style={{marginTop: 10}}>
                    <Text style={styles.textStyle}>
                        <Text style={styles.baseTextStyle}>fluxboy</Text>
                        是针对鲜易供应链（www.xianyiscm.com）服务状态监控的移动应用。
                        可用来查看各服务平均延迟、服务可用性状态、网络波动图表详情统计。
                    </Text>
                    <View style={{marginTop: 10, alignItems:'flex-end', marginRight: 5 }}>
                        <Text>
                            <Text style={styles.baseTextStyle}>Author : </Text>
                            dragon
                        </Text>
                        <Text>
                            <Text style={styles.baseTextStyle}>Mail : </Text>
                            i@dragon-yuan.me
                        </Text>
                        <Text>
                            <Text style={styles.baseTextStyle}>WebSite : </Text>
                            www.dragon-yuan.me
                        </Text>
                    </View>
                </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutScreen);

const styles = StyleSheet.create({
    textStyle: {
        paddingLeft: 5,
        paddingRight: 5,
    },
    baseTextStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Cochin',
    }
});

