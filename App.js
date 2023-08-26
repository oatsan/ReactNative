import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TouchableExample from './components/TouchableExample'
import TouchablePractice from './components/TouchablePractice'
import Example_useEffect from './components/Example_useEffect'
import UseEffectFlatList from './components/UseEffectFlatList'
import RandomUsersScreen from './components/RandomUsersScreen'
import FlatList_Example1 from './components/FlatList_Example1'
import FlatList_HeaderFooter from './components/FlatList_HeaderFooter'
import FlastListAPI from './components/FlastListAPI'
import News from './components/News'

const App = () => {
  return (
    <View style={styles.container}>
      {/* <TouchableExample/>  */}
       {/* <TouchablePractice/>  */}
       {/* <Example_useEffect/> */}
       {/* <UseEffectFlatList/> */}
       {/* <RandomUsersScreen/> */}
       {/* <FlatList_Example1/> */}
       {/* <FlatList_HeaderFooter/> */}
       {/* <FlastListAPI/> */}
       <News/>
       
    </View>
  )
}

export default App

const styles = StyleSheet.create({

  container:{

    flex:1,  

    justifyContent:'center',    


 }
}) 