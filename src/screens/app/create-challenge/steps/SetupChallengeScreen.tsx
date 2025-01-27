import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { View, TextInput, Platform, Pressable } from 'react-native';
import ProgressBar from '@components/common/ProgressBar';
import ThemedText from '@components/common/ThemedText';
import { CreateChallengeStackParamList } from '@navigation/CreateChallengeNavigator';
import useChallengeStore from '@stores/challenge.store';
import setupChallengeScreenStyles from '@styles/SetupChallengeScreen.styles';

type Props = NativeStackScreenProps<
  CreateChallengeStackParamList,
  'SetupChallengeScreen'
>;

export default function SetupChallengeScreen({ navigation }: Props) {
  const { setChallenge } = useChallengeStore();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [isStartPickerVisible, setIsStartPickerVisible] = useState(false);
  const [isEndPickerVisible, setIsEndPickerVisible] = useState(false);

  const [progress, setProgress] = useState(0);

  // Calcula o progresso com base nos campos preenchidos
  useEffect(() => {
    let filledFields = 0;

    if (title.trim()) filledFields++;
    if (description.trim()) filledFields++;
    if (startDate) filledFields++;
    if (endDate) filledFields++;

    setProgress((filledFields / 4) * 0.33);
  }, [title, description, startDate, endDate]);

  const calculateDuration = () => {
    if (startDate && endDate && endDate.getTime() >= startDate.getTime()) {
      const differenceInTime = endDate.getTime() - startDate.getTime();
      return Math.ceil(differenceInTime / (1000 * 3600 * 24));
    }
    return 0;
  };

  const handleSuggestion = (days: number) => {
    const baseStartDate = startDate || new Date();
    const baseEndDate = endDate || baseStartDate;
    const newEndDate = new Date(baseEndDate);
    newEndDate.setDate(baseEndDate.getDate() + days);

    setStartDate(baseStartDate);
    setEndDate(newEndDate);
  };

  const handleNextStep = () => {
    setChallenge({ title, description, startDate, endDate });
    navigation.navigate('CreateChallengeTasksScreen');
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={setupChallengeScreenStyles.container}>
        <ProgressBar progress={progress} />

        {/* Nome do Desafio */}
        <ThemedText style={{ marginTop: 28, fontSize: 14 }}>
          Título do desafio
        </ThemedText>
        <TextInput
          style={setupChallengeScreenStyles.input}
          placeholder="Defina o nome do seu desafio"
          placeholderTextColor="#6e6e6e"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />

        {/* Descrição */}
        <ThemedText style={{ marginTop: 28, fontSize: 14 }}>
          Sobre o desafio
        </ThemedText>
        <TextInput
          style={setupChallengeScreenStyles.textArea}
          placeholder="Explique as regras e objetivos do seu desafio"
          placeholderTextColor="#6e6e6e"
          multiline
          textAlignVertical="top"
          value={description}
          onChangeText={(text) => setDescription(text)}
        />

        <View style={setupChallengeScreenStyles.dateRow}>
          {/* Data de Início */}
          <View style={setupChallengeScreenStyles.dateColumn}>
            <ThemedText style={setupChallengeScreenStyles.dateTitle}>
              Data de início
            </ThemedText>
            <Pressable
              style={setupChallengeScreenStyles.dateInput}
              onPress={() => setIsStartPickerVisible(true)}
            >
              <TextInput
                style={setupChallengeScreenStyles.text}
                placeholder="Início"
                placeholderTextColor="#6e6e6e"
                value={startDate ? startDate.toLocaleDateString() : ''}
                editable={false} // Apenas leitura
              />
              <Ionicons
                name="calendar-outline"
                size={20}
                color="#6e6e6e"
                style={setupChallengeScreenStyles.icon}
              />
            </Pressable>
            {isStartPickerVisible && (
              <DateTimePicker
                value={startDate || new Date()}
                mode="date"
                display={Platform.OS === 'ios' ? 'inline' : 'default'}
                onChange={(event, selectedDate) => {
                  setIsStartPickerVisible(false);
                  if (selectedDate) setStartDate(selectedDate);
                }}
              />
            )}
          </View>

          {/* Data de Fim */}
          <View style={setupChallengeScreenStyles.dateColumn}>
            <ThemedText style={setupChallengeScreenStyles.dateTitle}>
              Data de fim
            </ThemedText>
            <Pressable
              style={setupChallengeScreenStyles.dateInput}
              onPress={() => setIsEndPickerVisible(true)}
            >
              <TextInput
                style={setupChallengeScreenStyles.text}
                placeholder="Fim"
                placeholderTextColor="#6e6e6e"
                value={endDate ? endDate.toLocaleDateString() : ''}
                editable={false} // Apenas leitura
              />
              <Ionicons
                name="calendar-outline"
                size={20}
                color="#6e6e6e"
                style={setupChallengeScreenStyles.icon}
              />
            </Pressable>
            {isEndPickerVisible && (
              <DateTimePicker
                value={endDate || new Date()}
                mode="date"
                display={Platform.OS === 'ios' ? 'inline' : 'default'}
                onChange={(event, selectedDate) => {
                  setIsEndPickerVisible(false);
                  if (selectedDate) setEndDate(selectedDate);
                }}
              />
            )}
          </View>
        </View>

        {/* Botões de Sugestão */}
        <View style={setupChallengeScreenStyles.suggestionsRow}>
          {[7, 30, 75].map((days) => (
            <Pressable
              key={days}
              style={setupChallengeScreenStyles.suggestionButton}
              onPress={() => handleSuggestion(days)}
            >
              <ThemedText
                style={setupChallengeScreenStyles.suggestionButtonText}
              >
                +{days} dias
              </ThemedText>
            </Pressable>
          ))}
        </View>

        {/* Duração do Desafio */}
        <ThemedText style={{ marginTop: 28, fontSize: 14 }}>
          Duração do desafio
        </ThemedText>
        <TextInput
          style={setupChallengeScreenStyles.input}
          value={`${calculateDuration()} dias`}
          editable={false}
        />

        {/* Botão de Avançar */}
        <Pressable
          style={setupChallengeScreenStyles.button}
          onPress={handleNextStep}
        >
          <ThemedText style={setupChallengeScreenStyles.buttonText}>
            Avançar
          </ThemedText>
        </Pressable>
      </View>
    </View>
  );
}
