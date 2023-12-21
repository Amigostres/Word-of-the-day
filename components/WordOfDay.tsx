import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function wordOfDay({word}){


  return(
    <ImageBackground source={require('../assets/backgroundImage.jpeg')}>
        {/* here will be the header and the word of the day */}
        <View style={styles.wordOfTheDay}>
          <Text style={styles.Text}>The word of the day </Text>
          <Text style={styles.TheWord}>{word}</Text>
        </View>

      </ImageBackground>
  )

}

const styles = StyleSheet.create({
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
})