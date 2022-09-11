import { COLORS } from './../../../../assets/helpers/colors';
import { StyleSheet } from 'react-native';

export const TypographyStyles = StyleSheet.create({
  text: {
    fontFamily: 'exo2',
    fontSize: 14,
    color: COLORS.text.main,
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
