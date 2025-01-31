import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CreateChallengeTasksScreen from 'src/modules/challenges/screens/create-challenge-steps/create-challenge-tasks/CreateChallengeTasksScreen';
import SaveChallengeScreen from 'src/modules/challenges/screens/create-challenge-steps/save-challenge/SaveChallengeScreen';
import SetupChallengeScreen from '../screens/create-challenge-steps/setup-challenge/SetupChallengeScreen';

export type CreateChallengeStackParamList = {
  SetupChallengeScreen: undefined;
  CreateChallengeTasksScreen: undefined;
  SaveChallengeScreen: undefined;
};

const Stack = createNativeStackNavigator<CreateChallengeStackParamList>();

export default function CreateChallengeNavigator() {
  return (
    <Stack.Navigator initialRouteName="SetupChallengeScreen">
      <Stack.Screen
        name="SetupChallengeScreen"
        component={SetupChallengeScreen}
        options={{ title: '' }}
      />
      <Stack.Screen
        name="CreateChallengeTasksScreen"
        component={CreateChallengeTasksScreen}
        options={{ title: '' }}
      />
      <Stack.Screen
        name="SaveChallengeScreen"
        component={SaveChallengeScreen}
        options={{ title: 'Configurar Regras' }}
      />
    </Stack.Navigator>
  );
}
