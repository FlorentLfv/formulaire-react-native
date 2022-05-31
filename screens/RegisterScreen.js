import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import RegisterPart1 from './RegisterPart1';
import RegisterPart2 from './RegisterPart2';

export default function App() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='RegisterPart1' component={RegisterPart1} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name='RegisterPart2' component={RegisterPart2} options={{ headerShown: false }}></Stack.Screen>
        </Stack.Navigator>
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
