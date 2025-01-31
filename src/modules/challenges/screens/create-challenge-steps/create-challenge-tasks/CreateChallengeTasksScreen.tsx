import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { CreateChallengeStackParamList } from 'src/modules/challenges/navigation/CreateChallengeNavigator';
import createChallengeTasksStyles from 'src/modules/challenges/screens/create-challenge-steps/create-challenge-tasks/CreateChallengeTasksScreen.style';
import useChallengeStore from 'src/modules/challenges/stores/challenge.store';
import ProgressBar from 'src/shared/components/ProgressBar';
import ThemedText from 'src/shared/components/ThemedText';

type Props = NativeStackScreenProps<
  CreateChallengeStackParamList,
  'CreateChallengeTasksScreen'
>;

export default function CreateChallengeTasksScreen({ navigation }: Props) {
  const { progress } = useChallengeStore().challenge;

  return (
    <View style={{ flex: 1 }}>
      <View style={createChallengeTasksStyles.container}>
        {/* Título da Página */}
        <ThemedText
          style={{
            paddingBottom: 24,
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          Inicie seu próximo desafio
        </ThemedText>
        <ProgressBar progress={progress} />
      </View>
    </View>
  );
}
