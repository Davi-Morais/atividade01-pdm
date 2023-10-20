import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import List from './components/List';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Text style={styles.title}>Minhas Tecnologias</Text>

      <List />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
  title: {
    color: '#4EA8DE',
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 55
  }
});
