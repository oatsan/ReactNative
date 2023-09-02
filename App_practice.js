import { View, Text , Button} from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import FirstPage from './components/pages/FirstPage'
import SecondPage from './components/pages/SecondPage'
import ThirdPage from './components/pages/ThirdPage'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName='Home'
      screenOptions={{
        headerStyle: {
          backgroundColor : '#008b8b'
        },
        headerTintColor : '#ffff',
        headerTitleStyle : {
          fontWeight : 'bold'
        }
      }}
      >
        <Stack.Screen 
        name='first'
        component={FirstPage}
        options={{title: 'FirstPage'}}
        />
        <Stack.Screen 
        name='second' 
        component={SecondPage}
        />
        <Stack.Screen 
        name='third' 
        component={ThirdPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App