import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const SecondPage = ({navigation}) => {
    return(
        <View style = {styles.container}>
          <Text style = {styles.textStyle}>This is the Second Page of the app</Text>
          <Button title='GO BACK' 
          onPress={()=>navigation.goBack()}/>
          <Button title='GO TO SECOND PAGE...AGAIN' 
          onPress={()=>navigation.push('second')}/>
          <Button title='GO TO FIRST PAGE' 
          onPress={()=>navigation.navigate('first')}/>
          <Button title='GO TO THIRD PAGE' 
          onPress={()=>navigation.navigate('third')}/>
        </View>
      )
}

export default SecondPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        },
        textStyle: {
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 16
        },
})