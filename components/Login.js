import { StyleSheet, Text, View, Button,useState } from 'react-native'
import React from 'react'

const Login = () => {
    const [textInputName,setTextInputName] = useState('')
    const [textInputEmail,setTextInputEmail] = useState('')

    const checkTextInput = () => {

        //Check for the Name TextInput
        if(!textInputName.trim()) {

            alert('Please Enter Name');
            return;

        }
        //check for the Email TextInput
        if(!textInputEmail.trim()){
            alert('Please Enter Name');
            return;
        }
        
        //checked Successfully
        if(textInputEmail.trim()){
            alert('Success');
            return;
        }

        //Do whatever you want
    };

  return (
    <View style={styles.container}>
       <TextInput
       
       placeholder='Enter Name'
       style = {styles.textInputStyle}
       value = {textInputName}
       onChangeText={(value)=>{setTextInputName(value)}}
    />
    <Text>{'\n\n'}</Text>
    <TextInput
       
       placeholder='Enter Email'
       style = {styles.textInputStyle}
       value = {textInputEmail}
       onChangeText={(value)=>{setTextInputEmail(value)}}
    />
    <Button title='SUBMIT'
            onPress={()=>checkTextInput()}
    />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding:35,
    },
    textInputStyle: {
        width: '100%',
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 0.5,
        marginTop: 15,
    },

})