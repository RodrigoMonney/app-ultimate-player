import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CreateChallengeTasksScreen from '@screens/app/create-challenge/steps/CreateChallengeTasksScreen';
import SaveChallengeScreen from '@screens/app/create-challenge/steps/SaveChallengeScreen';
import SetupChallengeScreen from '@screens/app/create-challenge/steps/SetupChallengeScreen';

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
        options={{ title: 'Inicie Seu Próximo Desafio' }}
      />
      <Stack.Screen
        name="CreateChallengeTasksScreen"
        component={CreateChallengeTasksScreen}
        options={{ title: 'Criar Tarefas' }}
      />
      <Stack.Screen
        name="SaveChallengeScreen"
        component={SaveChallengeScreen}
        options={{ title: 'Configurar Regras' }}
      />
    </Stack.Navigator>
  );
}
