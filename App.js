import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Seen1 from './compments/Seen1';
import Seen2 from './compments/Seen2';
import Seen3 from './compments/Seen3';
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Seen1" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Seen1" component={Seen1} />
        <Stack.Screen name="Seen2" component={Seen2} />
        <Stack.Screen name="Seen3" component={Seen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const Stack = createNativeStackNavigator();
