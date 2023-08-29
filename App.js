import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NumeroAleatorio2 from './componente/semana03/NumeroAleatorio2';





export default function App() {
  return (
    <View style={styles.container}>
      <Text> ola mundo</Text>
      <NumeroAleatorio2 min={1} max={60} />,
 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
