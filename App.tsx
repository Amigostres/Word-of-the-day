import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View,  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import WordOfDay from './components/WordOfDay';

export default function App() {
  const fillerText:string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud`
  const [word, setWord] = useState("...loading")
  const [definition, setDefinition] = useState(fillerText)
  const [changeWord, setChangeWord] = useState(0) // this is only here to change the word when the change button is pressed


  function handleWordChange(){
    
    setChangeWord(prev => prev+1)

  }
 //here we get the word from the API
  useEffect(() => {
    fetch('https://random-word-api.herokuapp.com/word')
    .then(response => response.json())
    .then(data => setWord(data[0]))
  }, [changeWord])

  // https://react-native-async-storage.github.io/async-storage/docs/usage
  // attempting to use AsyncStorage to store the word in local storage
  //not yet hooked up
  const storeData = async (value: string) => {
    try {
      await AsyncStorage.setItem('my-key', value);
    } catch (e) {
      // saving error
      console.log(e);
      
    }
  };

  return (
    <View style={styles.container}>

      {/* the word of the day view */}
      <WordOfDay word={word} />


      {/* here there will be the definition */}
      <View style={styles.DefinitionContainer}>
        <Text style={styles.textComponent}>{definition}</Text>
        <Button title='Change' onPress={handleWordChange} />
      </View>

      {/* example use cases */}
      <View>

      </View>

      {/* used words history */}
      <View>

      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexWrap: 'wrap',
    backgroundColor: '#ddd',
  },
  DefinitionContainer : {
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: 20,
    alignSelf: 'center',
    padding: 20
    // flex:2
  },
  textComponent: {
    flex: 2,

  },
  usedButton: {
  }
});
