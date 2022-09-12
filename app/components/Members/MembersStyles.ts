import { COLORS } from './../../../assets/helpers/colors';
import { StyleSheet } from 'react-native';

export const MembersStyles = StyleSheet.create({
  main: {
    flex: 1,
  },
  sum: {
    width: '100%',
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  members: {
    marginTop: 40,
  },
});
