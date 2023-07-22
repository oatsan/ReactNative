import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

import { useState } from 'react'
import { TextInput } from 'react-native-web';
import { Button } from 'react-native';


const MyInput = () => {

    const [text, setText] = useState('');

  return (

 
    <view style={styles.container}>

        <TextInput
           
           placeholder='Enter Text'
           style = {styles.textInputStyle}
           value = {text}
           onChangeText={(value)=>{setText(value)}}
        />
        <Text>{'\n\n'}You typed: {text}</Text>
        <Text>{'\n\n'}</Text>
        <Button title='Reset'
                onPress={()=>setText('Hello')}
        />


    </view>

  )

}


export default MyInput


const styles = StyleSheet.create({


    container:{
        flex:1,
        padding :35
    },
    textInputStyle:{
        width:'100%',
        height:40,
        paddingHorizontal:5,
        borderWidth:0.5,
        marginTop:15
    }

})