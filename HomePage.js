import React from 'react'
import { View,Text, Button } from 'react-native'

function HomePage({navigation}) {
  return (
      <View style={{alignContent:'center',justifyContent:"center"}}>
          <Text>Home Pages</Text>
          <Button title='Detailed' onPress={()=>navigation.navigate('Detailed')}/>
    </View>
  )
}

export default HomePage