import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import TabNavigator from './TabNavigator';
import ChatsScreen from '../../modules/chats/ChatsScreen';
import NotificationsScreen from '../../modules/notifications/NotificationsScreen';

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
