import { COLORS } from './../../../../assets/helpers/colors';
import { StyleSheet } from 'react-native';

export const TypographyStyles = StyleSheet.create({
  text: {
    fontFamily: 'exo-regular',
    color: COLORS.text.main,
  },

  bold: {
    fontFamily: 'exo-bold',
  },
  light: {
    fontFamily: 'exo-light',
  },
  medium: {
    fontFamily: 'exo-medium',
  },
  thin: {
    fontFamily: 'exo-thin',
  },

  //text-styles
  h1: {
    fontSize: 24,
    fontFamily: 'exo-bold',
  },

  //Colors
  orange: {
    color: COLORS.orange,
  },
  white: {
    color: '#fff',
  },
});
