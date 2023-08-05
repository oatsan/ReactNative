import { View, Text , StyleSheet} from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View   style = {[
      styles.container,{flexDirection : 'column'}
     ]} 
     >
     
     {/* <view style={{flex:1,backgroundColor:'red'}}/>
     <view style={{flex:2,backgroundColor:'darkorange'}}/>
     <view style={{flex:3,backgroundColor:'green'}}/> */}
     <view style={{flex:1,backgroundColor:'powerblue'}}/>
     <view style={{flex:1,backgroundColor:'skyblue'}}/>
     <view style={{flex:1,backgroundColor:'steelblue'}}/>
       
    </View>
  )
}

export default App
const styles = StyleSheet.create({

  container:{

     flex:1,  

  }

 })