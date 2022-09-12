import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../assets/helpers/colors';

export const MembersKidStyles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  main: {
    width: '70%',
    backgroundColor: COLORS.background,
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  status__wrapper: {
    width: 30,
    height: 30,
    marginLeft: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.border,
  },
  status: {
    backgroundColor: COLORS.negative,
    width: 20,
    height: 20,
    borderRadius: 5,
  },
  status_positive: {
    backgroundColor: COLORS.positive,
  },
});
