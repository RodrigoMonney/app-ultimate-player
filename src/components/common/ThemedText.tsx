import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text as RNText, TextStyle, TextProps } from 'react-native';

interface ThemedTextProps extends TextProps {
  style?: TextStyle | TextStyle[];
}

export default function ThemedText({ style, ...props }: ThemedTextProps) {
  const { colors } = useTheme();

  return <RNText style={[{ color: colors.text }, style]} {...props} />;
}
