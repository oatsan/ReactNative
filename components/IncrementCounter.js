import { View, Text, Button } from 'react-native'
import React, {useState} from 'react'

const IncrementCounter = () => {


    const [age,setAge] = useState(23);

    const increment = ()=>{
        setAge(a => a + 1);
    }

  return (
    <View>
      <Text style={{fontSize:24,fontStyle:'bold'}}>
        Your age: {age}
        </Text>

        <Text>{'\n\n'}</Text>
        <Button title='+3'onPress={()=> (increment(age),increment(age),increment(age))}/>
        <Text>{'\n\n'}</Text>
        <Button title='+1'onPress={()=>increment(age)}/>
    </View>
  )
}



export default IncrementCounter

