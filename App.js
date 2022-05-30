import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Countries from './components/Countries';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Rabin</Text>
      <Text>I am working now React Native</Text>
      <StatusBar style="auto" />
      <Countries></Countries>
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
