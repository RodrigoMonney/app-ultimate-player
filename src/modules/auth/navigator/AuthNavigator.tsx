import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '../LoginScreen';
import RegisterScreen from '../RegisterScreen';

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
