import { 
  StyleSheet,
   Text, 
   View ,
  SafeAreaView,
  Alert,
  Button 
} from 'react-native'
import React from 'react'

const Seperator = ()=> <view style = {styles.seperator}/>

const App = () => {
  return (
   <SafeAreaView style={styles.container}>
    <view>
      <Text style={styles.title}>
      The title and onPress handler are required. It is recommended to set
      accessibilityLabel to help make your app usable by everyone.
      </Text>
      <Button
      title='Press Me'
      onPress = {()=> Alert.alert('Simple Button Pressed')}
      />
      <Seperator/>
    </view>

    <view>
      <Text style={styles.title}>
      Adjust the color in a way that looks standard on each platform. On iOS,
the color prop controls the color of the text. On Android, the color
adjusts the background color of the button.
      </Text>
      <Button
      title='Press Me'
      onPress = {()=> Alert.alert('Simple Button Pressed')}
      color = 'pink'
      />
      <Seperator/>
    </view>

    <view>
      <Text style={styles.title}>
      All interaction for the component are disabled.
      </Text>
      <Button
      title='Press Me'
      onPress = {()=> Alert.alert('Simple Button Pressed')}
      color = 'gray'
      /> 
    </view>

    <view>
      <Text style={styles.title}>
      This layout strategy lets the title define the width of the button.
      </Text>

      <view style={styles.fixToText}>
      <Button
      title='LEFT BUTTON'
      onPress = {()=> Alert.alert('left')}
      color = 'gray'
      /> 

      <Button
      title='RIGHT BUTTON'
      onPress = {()=> Alert.alert('right')}
      color = 'gray'
      /> 

      </view>
    </view>

   </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({

  container : {
    flex:1,
    justifyContent: 'center',
    marginHorizontal : 16,
  },
  title : {
    textAlign : 'center',
    marginVertical : 8,
  },
  fixToText : {
    flexDirection : 'row',
    justifyContent : 'space-between',
  },
  seperator : {
    marginVertical : 8,
    borderBottomColor : '#737373',
    borderBottomWidth : StyleSheet.hairlineWidth,
  }
})