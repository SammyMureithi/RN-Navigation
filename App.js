import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './HomePage';
import CustomeHeader from './Pages/CustomeHeader';
import Detailed2 from './Pages/Detailed2';
import DetailedPage from './Pages/DetailedPage';
import DetailedPageWithParam from './Pages/DetailedPageWithParam';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomePage} options={ {title:"Jamaa"}} />
        <Stack.Screen name='Detailed' component={DetailedPage} options={{ title: 'Overview' }} />
        {/**We could also pass additional props to our routes */}
        <Stack.Screen name='DetaileWithProps'>
          {(props)=> <Detailed2 {...props} name={"Sammy"}/>}
        </Stack.Screen>
        <Stack.Screen name="Param" component={DetailedPageWithParam} options={{ title: "Params Passing" }} />
        <Stack.Screen name='Bar' component={CustomeHeader}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
