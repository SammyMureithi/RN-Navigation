import React from 'react'
import { View,Text } from 'react-native'
import HeaderBar from '../Coponents/HeaderBar'


function CustomeHeader( { route, navigation } ) {
  navigation.setOptions( {
    headerTitle: ( props ) => <HeaderBar {...props} />,
    headerRight: () => ( <Text>Twitter</Text> ),
  } )
  return (
      <View>
          <Text>Custome Header</Text>
      </View>
  )
}

export default CustomeHeader