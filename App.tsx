import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Signin from './components/login/signin';
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator()  ;

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="signin"
          component={Signin}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}