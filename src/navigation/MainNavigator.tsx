import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import TabNavigator from './TabNavigator';
import ChatsScreen from '../screens/app/chats/ChatsScreen';
import NotificationsScreen from '../screens/app/notifications/NotificationsScreen';

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Tabs" component={TabNavigator} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Chats" component={ChatsScreen} />
    </Stack.Navigator>
  );
}
