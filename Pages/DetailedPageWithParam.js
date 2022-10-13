import React from 'react'
import { Text, View } from 'react-native'

function DetailedPageWithParam( { route, navigation } ) {
    const { userId, userName } = route.params
    navigation.setOptions({title:userName})
    return (
        <View>
            <Text>Detailed Page With Route Parameters</Text>
            <Text>Clicked With user {userName } with Id {userId}</Text>
            </View>
  )
}

export default DetailedPageWithParam