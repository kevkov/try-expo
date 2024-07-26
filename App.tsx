import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {hello, View1, View2} from './out/Library'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// noinspection JSUnusedGlobalSymbols
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"View1"}>
                <Stack.Screen name="View1" component={View1} />
                <Stack.Screen name="View2" component={View2} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
