import React from 'react'
import { useState } from 'react'
import { View,Text, Button } from 'react-native'

function HomePage( { navigation } ) {
    const [userId, setUserId] = useState( 29 );
  return (
      <View style={{alignItems:'center',justifyContent:"center",flex:1,backgroundColor:"green"}}>
          <Text variant="h3">Home Pages</Text>
          <Button title='Detailed' onPress={() => navigation.navigate( 'Detailed' )} />
          <Button title='To Detailed with Props' onPress={() => navigation.navigate( "DetaileWithProps" )} />
          <Button title='Go to Detailed' onPress={() => navigation.navigate( "Param", {
              userId:  userId ,
              userName:"Sammy"
          } )} />
          <Button title="Customer Header Bar" onPress={()=>navigation.navigate("Bar")}/>
    </View>
  )
}

export default HomePage