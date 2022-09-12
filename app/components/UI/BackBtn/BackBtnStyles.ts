import { COLORS } from './../../../../assets/helpers/colors';
import { StyleSheet } from 'react-native';

export const BackBtnStyles = StyleSheet.create({
  main: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.border,
    borderWidth: 1,
    borderRadius: 50,
    width: 44,
    height: 44,
  },
});
