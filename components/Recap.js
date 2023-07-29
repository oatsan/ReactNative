import { StyleSheet, Text, View ,Button,TextInput} from 'react-native'
import React,{ useState } from 'react'

const Recap = () => {
   
    const [textInputEmail,setTextInputEmail] = useState('');
    const [textInputPassWord,setTextInputPassWord] = useState('');


    const checkTextInput = () => {
        if( (!textInputEmail.trim()) & (!textInputPassWord.trim()) ){
            alert('plese input email & password');
            return;
        }if(!textInputEmail){
            alert('plese input Email');
            return;
        }if(!textInputPassWord){
            alert('plese input Password')
            return;
        }else{
            alert('email:'+ textInputEmail + '\npassword' + textInputPassWord);
            return;
        }
    }

  return (
    <View style={styles.container}>
    <TextInput
    
    placeholder='Email'
    style = {styles.input}
    value = {textInputEmail}
    onChangeText={(value)=>{setTextInputEmail(value)}}
 />
 
 <TextInput
    
    placeholder='Password'
    style = {styles.input}
    value = {textInputPassWord}
    onChangeText={(value)=>{setTextInputPassWord(value)}}
 />
 <Button 
        color='#7a42f4'
         title='Submit'
         onPress={()=>checkTextInput()}
 />
 </View>
  )
}

export default Recap

const styles = StyleSheet.create({
    container : {
        paddingTop : 23
    },
    input : {
        margin : 15,
        height : 40,
        borderColor : '#7a42f4',
        borderWidth : 1
    },
    submitButton:{
        backgroundColor:'#7a42f4',
        padding : 10,
        margin : 15,
        height : 40,
    },
    submitButtonText : {
        color : 'white'
    }
})