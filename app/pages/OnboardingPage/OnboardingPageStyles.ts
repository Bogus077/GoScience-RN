import { StyleSheet } from 'react-native';

export const OnboardingPageStyles = StyleSheet.create({
  main: {
    flex: 1,
    margin: 24,
    marginTop: 50,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigate: {
    display: 'flex',
    alignItems: 'center',
  },
  loginButton: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 25,
  },
  image: {
    alignSelf: 'center',
    width: '70%',
    maxHeight: '50%',
    resizeMode: 'contain',
  },
});
