import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import logo from './assets/logo192.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 192, height: 192 }} />
      <Text style={{ color: '#000' }}>Hello, World!!!</Text>
      <StatusBar style="auto" />
      <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={{ backgroundColor: 'blue' }}
      >
        <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo!!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
