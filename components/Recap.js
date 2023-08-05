import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Recap = () => {

    const [text, setText] = useState('');

  return (

 
    <view style={styles.container}>

        <TextInput
         placeholder='Email'
         style = {styles.input}
         value = {text}
         onChangeText={(value)=>{setText(value)}}
        
        />

        <TextInput
         placeholder='Password'
         style = {styles.input}
       
        />

        <Button
        title='Submit'
        style = {styles.submitButton}
        />

        
    </view>

  )
}

export default Recap

const styles = StyleSheet.create({


    container : {
        paddingTop : 23
    },
    input : {
        margin : 15,
        height: 40,
        borderColor : '#7a42f4',
        borderWidth : 1
    },
    submitButton : {
        backgroundColor : '#7a42f4',
        padding : 10,
        margin : 15,
        height : 40,
    },
    submitButtonText : {
        color : 'white'
    }
})