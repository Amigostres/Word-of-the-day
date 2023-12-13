import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const message: string = 'hello World';
  return (
    <View style={styles.container}>
      <Text>The word of the day </Text>
      <Text>{message}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: '#ddd',
    alignItems: 'center',
    // justifyContent: 'space-around',
  },
});
