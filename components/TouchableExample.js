import { StyleSheet, Text, View ,TouchableHighlight
, TouchableOpacity} from 'react-native'
import React, {useState} from 'react' 

const TouchableExample = () => {

    const [count,setCount] = useState(0);

    const onPress = ()=>{setCount(count+1)}

  return (
    <View style = {styles.container}>
      <TouchableHighlight
      style = {styles.button}
      onPress={onPress}
      >
            <Text>TouchableHighlight</Text>
      </TouchableHighlight>

      <Text>{'\n\n'}</Text>

      <TouchableHighlight
      style = {styles.button}
      onPress={onPress}
      >
            <Text>TouchableOpacity</Text>
      </TouchableHighlight>
      
      <view style={styles.countContainer}>
        <Text style = {styles.countText}>
            {count}
        </Text>
      </view>
    </View>
  )
}

export default TouchableExample

const styles = StyleSheet.create({

    container : {
        flex : 1,
        justifyContent : 'center',
        paddingHorizontal : 10,
    },
    button : {
        alignItems : 'center',
        backgroundColor : '#DDDDDD',
        padding : 10,

    },
    countContainer : {
        alignItems : 'center',
        padding : 10,
    },
    countText : {
        color : '#FF00FF',
    }
})