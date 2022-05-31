import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import SuccessScreen from './screens/SuccessScreen';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Accueil' component={HomeScreen} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='Connexion' component={LoginScreen}></Stack.Screen>
        <Stack.Screen name='Inscription' component={RegisterScreen}></Stack.Screen>
        <Stack.Screen name='Success' component={SuccessScreen} options={{ headerShown: false }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}