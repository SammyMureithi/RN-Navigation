import React from 'react'
import { Button, Text, View } from 'react-native'

function Detailed2({name,navigation}) {
    return (
        <View>
            <Text>Detailed 2 page With additional props {name}</Text>
            <Button onPress={()=> navigation.goBack()} title="Back"></Button>
      </View>
     
      
  )
}

export default Detailed2