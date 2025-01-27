import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { CreateChallengeStackParamList } from '@navigation/CreateChallengeNavigator';

type Props = NativeStackScreenProps<
  CreateChallengeStackParamList,
  'CreateChallengeTasksScreen'
>;

export default function CreateChallengeTasksScreen({ navigation }: Props) {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => setTasks([...tasks, `Tarefa ${tasks.length + 1}`]);

  return (
    <View style={styles.container}>
      <Button title="Adicionar Tarefa" onPress={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={({ item }) => <Text style={styles.task}>{item}</Text>}
      />
      <Button
        title="Avançar"
        onPress={() => navigation.navigate('SaveChallengeScreen')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  task: {
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 8,
    marginVertical: 5,
  },
});
