import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  const message: string = 'word of the DAY';
  return (
    <View
      style={{
        // flex: 1,
        // padding: 150,
        width: "100%",
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ddd'
      }}>
      <Text>{message}</Text>

    </View>
  );
};

