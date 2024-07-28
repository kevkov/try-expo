import {StatusBar} from 'expo-status-bar';
import {StyleSheet} from 'react-native';
import {View1, View2, View3, View4} from './out/Library'
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
                <Stack.Screen name="View3" component={View3} />
                <Stack.Screen name="View4" component={View4} />
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
