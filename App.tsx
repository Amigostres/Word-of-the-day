import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [word, setWord] = useState("WordOfTheDay")
  const [definition, setDefinition] = useState('a word is a word')
  return (
    <View style={styles.container}>
      {/* here will be the header and the world of the day */}
      <View style={styles.wordOfTheDay}>
        <Text style={styles.Text}>The word of the day </Text>
        <Text style={styles.TheWord}>{word}</Text>
        <StatusBar style="auto" />
      </View>


      {/* here there will be the definition */}
      <View style={styles.DefinitionContainer}>
        <Text>{definition}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexWrap: 'wrap',
    backgroundColor: '#ddd',
  },
  wordOfTheDay : {
    backgroundColor: 'blue',
    alignItems:'center',
    justifyContent: 'center',
    gap: 20,
    width: '100%',
    padding:50
  },
  Text: {
    fontSize:20,

  },
  TheWord: {
    fontSize: 30,
    
  },
  DefinitionContainer : {
    alignSelf: 'center',
    padding: 20
    // flex:2
  }
});
