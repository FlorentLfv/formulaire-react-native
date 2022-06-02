import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import SuccessScreen from './screens/SuccessScreen';
import DataScreen from './screens/DataScreen';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Accueil' component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Connexion' component={LoginScreen} />
        <Stack.Screen name='Inscription' component={RegisterScreen} />
        <Stack.Screen name='Success' component={SuccessScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Informations' component={DataScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}