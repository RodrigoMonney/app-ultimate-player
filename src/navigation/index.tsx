import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar'; // Alterado para o Expo StatusBar
import React, { useEffect, useState } from 'react';
import ultimatePlayerTheme from '@utils/theme';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

export default function AppNavigation() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAuthenticated(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer theme={ultimatePlayerTheme}>
      <StatusBar
        style="light"
        backgroundColor={ultimatePlayerTheme.colors.card}
      />
      {isAuthenticated ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
