import React from 'react';
import { Provider } from 'react-redux'
import {
    AppRegistry
} from 'react-native'

import AppWithNavigationState from './components/navigators/navigators';

import configureStore from './store/store';
const store = configureStore();

class App extends React.Component {

    constructor(props) {
        super(props);
        this.store = store
    }

    render() {
        return (
            <Provider store={ this.store }>
                <AppWithNavigationState />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('fluxboy', () => App);
