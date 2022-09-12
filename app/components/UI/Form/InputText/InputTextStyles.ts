import { COLORS } from './../../../../../assets/helpers/colors';
import { StyleSheet } from 'react-native';

export const InputTextStyles = StyleSheet.create({
  main: {
    display: 'flex',
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    padding: 5,
    paddingHorizontal: 16,
  },
  main_error: {
    borderColor: COLORS.negative,
  },
});
