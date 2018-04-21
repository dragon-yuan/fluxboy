import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Image, StyleSheet, } from 'react-native';
import { addNavigationHelpers, StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
// ICON
import HomePressedIcon from '../../../assets/img/app/icon_route_press.png';
import HomeRenderIcon from '../../../assets/img/app/icon_route.png';
import MinePressedIcon from '../../../assets/img/app/icon_mine_press.png';
import MineRenderIcon from '../../../assets/img/app/icon_mine.png';
// SCREEN
import HomeScreen from '../../views/home/index';
import MineScreen from '../../views/mine/index';
import SplashScreen from '../../views/splash/index';
import ServersScreen from '../../views/servers/index';

const styles = StyleSheet.create({
    tabIcon: {
        resizeMode: 'cover'
    }
});

const TabRouteConfigs = {
    Home: {
        screen: HomeScreen,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: '首页',
            tabBarIcon: ({focused, tintColor}) => (
                <Image
                    source={focused ? HomePressedIcon : HomeRenderIcon}
                    style={styles.tabIcon}
                />
            ),
        }),
    },
    Mine: {
        screen: MineScreen,
        navigationOptions: ({navigation}) => ({
            title: '我的',
            tabBarIcon: ({focused, tintColor}) => (
                <Image
                    source={focused ? MinePressedIcon : MineRenderIcon}
                    style={styles.tabIcon}
                />
            ),
        }),
    }
};
const TabNavigatorConfigs = {
    initialRouteName: 'Home',
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    lazy: true,
    tabBarOptions: {
        activeTintColor: '#2562b4', // 文字和图片选中颜色
        inactiveTintColor: '#999999', // 文字和图片默认颜色
        showIcon: true, // Android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {
            height: 0
        },
        style: {
            backgroundColor: '#FFFFFF', // TabBar 背景色
        },
        labelStyle: {
            fontSize: 11, // 文字大小
        },
    },
};
const TabBarNavigator = TabNavigator(TabRouteConfigs, TabNavigatorConfigs);

export const AppNavigator = StackNavigator({
    Splash: {
        screen: SplashScreen,
        navigationOptions: {
            header: null
        }
    },
    Main: {
        screen: TabBarNavigator,
        navigationOptions: {
            header: null,
            headerBackTitle: null
        }, initialRouteParams: {
            currentTab: 'Home'
        }
    },
    ServersScreen: {
        screen: ServersScreen,
        navigationOptions: {
            header: null,
        }
    },
}, {
    // 导航条动画效果：float表示会渐变，类似于iOS的原生效果，screen表示没有渐变。none表示隐藏导航条
    headerMode: 'screen',
    // 跳转方式：默认的card，在iOS上是从右到左跳转，在Android上是从下到上，都是使用原生系统的默认跳转方式。
    mode: 'card',
    // 初始化哪个界面为根界面
    initialRouteName: 'Splash',
});


const AppWithNavigationState = ({dispatch, nav}) => (
    <AppNavigator navigation={addNavigationHelpers({dispatch, state: nav})}/>
);

AppWithNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState)
