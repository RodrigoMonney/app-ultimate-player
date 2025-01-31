import { StyleSheet } from 'react-native';
import ultimatePlayerTheme from 'src/core/utils/theme';

const setupChallengeScreenStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    margin: 0,
    backgroundColor: ultimatePlayerTheme.colors.card,
    borderWidth: 0.5,
    borderColor: ultimatePlayerTheme.colors.border,
    borderRadius: 8,
    padding: 24,
    alignSelf: 'center',
    marginTop: 8,
  },

  input: {
    backgroundColor: ultimatePlayerTheme.colors.primary,
    color: '#F5F5F7',
    borderWidth: 0.5,
    borderColor: ultimatePlayerTheme.colors.border,
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 10,
    fontSize: 14,
  },

  textArea: {
    backgroundColor: ultimatePlayerTheme.colors.primary,
    color: '#F5F5F7',
    borderWidth: 0.5,
    borderColor: ultimatePlayerTheme.colors.border,
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 10,
    fontSize: 14,
    minHeight: 80,
  },

  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 28,
  },

  dateColumn: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 4,
  },

  dateTitle: {
    fontSize: 14,
    marginBottom: 10,
  },

  dateInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: ultimatePlayerTheme.colors.primary,
    color: '#F5F5F7',
    borderWidth: 0.5,
    borderColor: ultimatePlayerTheme.colors.border,
    borderRadius: 4,
    paddingVertical: 0,
    paddingHorizontal: 12,
  },

  text: {
    flex: 1,
    color: '#F5F5F7',
    fontSize: 14,
  },

  icon: {
    marginLeft: 8,
  },

  button: {
    backgroundColor: '#F5F5F7',
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 24,
  },

  buttonText: {
    color: ultimatePlayerTheme.colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },

  suggestionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingLeft: 5,
    paddingRight: 5,
  },
  suggestionButton: {
    backgroundColor: ultimatePlayerTheme.colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 4,
    borderWidth: 0.45,
    borderColor: ultimatePlayerTheme.colors.text,
  },
  suggestionButtonText: {
    color: ultimatePlayerTheme.colors.text,
    fontSize: 14,
  },
});

export default setupChallengeScreenStyles;
