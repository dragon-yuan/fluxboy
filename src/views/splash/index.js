import React from "react";
import {
    Image, StyleSheet, Platform,
} from 'react-native';
import { connect } from 'react-redux'
import SplashScreen from 'react-native-splash-screen'

const styles = StyleSheet.create({
    backgroundImage:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:null,
        height:null,
        backgroundColor:'rgba(0,0,0,0)',
    }
});

/**
 * SplashScreen运行依赖
 * yarn add react-native-splash-screen
 * react-native link react-native-splash-screen
 */
class Splash extends React.Component {

    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        this.timer = setTimeout(() => {
            SplashScreen.hide()
        }, Platform.OS === 'ios' ? 500 : 2000)
        const value = 1;
        if (value && value * 1 === 1) {
            this.routeName = 'Login' // TODO
        } else {
            this.routeName = 'Welcome'
        }
        this.timer = setTimeout(() => {
            this.props.navigation.dispatch({ type: this.routeName, mode: 'reset', params: {} })
        }, Platform.OS === 'ios' ? 1000 : 1500);
    }

    // APP欢迎页
    render() {
        return (
            <Image source={require('../../../assets/img/app/app-splash.png')} style={styles.backgroundImage} />
        );
    }
}

function mapStateToProps(state) {
    const { app } = state;
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);