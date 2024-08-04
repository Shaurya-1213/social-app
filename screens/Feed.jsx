import React from 'react'
import { Image, Text, View } from 'react-native'

const Feed = () => {

  const feedImages={
    1: require('./assets/11.jpeg'),
    2: require('./assets/12.jpeg'),
    3: require('./assets/13.jpeg'),
    4: require('./assets/14.jpeg'),  
  }

  return (
    <>
    <View style={styles.container}>  
    <Text>Feed</Text>
    <Image style={styles.feed} source={feedImages[11]} />
    </View>

    <View style={styles.main}>

    </View>
    </>
    )
}

export default Feed

const styles = StyleSheet.create({
  container:{
    display:'flex',
    justifyContent:'center',
  },
  feed:{
    width: '100',
    borderRadius:'50%',
  },
  main:{
    width:'80%',
    height:'400',
  }
})