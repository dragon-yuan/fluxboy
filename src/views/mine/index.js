import React from "react";
import {
    Text, View,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';

export default class MeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Hello World!</Text>
            </View>
        );
    }
}
