import { StyleSheet } from 'react-native';

export const MainMenuStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 30,
  },
  menu: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 10,
    flexDirection: 'row',
    elevation: 50,
  },
  menu__item: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 10,
  },
});
