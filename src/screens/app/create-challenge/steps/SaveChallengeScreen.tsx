import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { CreateChallengeStackParamList } from '@navigation/CreateChallengeNavigator';

type Props = NativeStackScreenProps<
  CreateChallengeStackParamList,
  'SaveChallengeScreen'
>;

export default function SaveChallengeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Regras do Desafio:</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Descreva as regras"
        multiline
      />

      <Text style={styles.label}>Recompensa:</Text>
      <TextInput style={styles.input} placeholder="Descreva a recompensa" />

      <Button title="Salvar" onPress={() => alert('Desafio salvo!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  textArea: { height: 100 },
});
