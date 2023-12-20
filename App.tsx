import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  const fillerText:string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud`
  const [word, setWord] = useState("WordOfTheDay")
  const [definition, setDefinition] = useState(fillerText)
  const [changeWord, setChangeWord] = useState(0) // this is only here to change the word when the change button is pressed


  function handleWordChange(){
    
    setChangeWord(prev => prev+1)

  }
 //here we get the word from the API
  useEffect(() => {
    fetch('https://random-word-api.herokuapp.com/word')
    .then(response => response.json())
    .then(data => setWord(data))
  }, [changeWord])

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/backgroundImage.jpeg')}>
        {/* here will be the header and the word of the day */}
        <View style={styles.wordOfTheDay}>
          <Text style={styles.Text}>The word of the day </Text>
          <Text style={styles.TheWord}>{word}</Text>
        </View>

      </ImageBackground>


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
  wordOfTheDay : {
    // backgroundColor: 'blue',
    alignItems:'center',
    justifyContent: 'center',
    gap: 20,
    width: '100%',
    height: 250,
    // padding:50
  },
  Text: {
    fontSize:20,

  },
  TheWord: {
    fontSize: 30,
    
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
