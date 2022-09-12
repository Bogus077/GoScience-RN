import { COLORS } from './../../../../assets/helpers/colors';
import { StyleSheet } from 'react-native';

export const MembersPlatStyles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 24,
    display: 'flex',
  },
  container: {
    alignItems: 'center',
    paddingBottom: 50,
  },
  summary: {
    width: '85%',
    borderRadius: 10,
    marginBottom: 20,
    height: 95,
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: COLORS.background,
  },
  summary__header: {
    position: 'absolute',
    top: 10,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  summary__item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 3,
  },
  summary__count: {
    width: 25,
    alignItems: 'flex-end',
    marginRight: 5,
  },
});
