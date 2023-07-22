import { StyleSheet, 
    Text,
    View ,
    TextInput,
    Button } from 'react-native'
import React,{useState} from 'react'

const Form = () => {


    const [name,setName] = useState('Taylor')
    const [age,setAge] = useState(42);
 

  return (

    <view style={styles.container}>

    <TextInput
       
       placeholder='Taylor'
       style = {styles.textInputStyle}
       value = {name}
       onChangeText={(value)=>{setName(value)}}
    />
    <Text>{'\n\n'}Hello, {name}. You are {age}</Text>
    <Text>{'\n\n'}</Text>
    <Button title='INCREMENT AGE'
            onPress={()=>setAge(a => a + 1)}
    />


</view>

    



  )
}

export default Form

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