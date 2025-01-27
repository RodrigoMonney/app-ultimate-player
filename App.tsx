import React from 'react';
import { enableScreens } from 'react-native-screens';
import AppNavigation from '@navigation/index';

export default function App() {
  enableScreens();
  return <AppNavigation />;
}
