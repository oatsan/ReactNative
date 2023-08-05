import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './components/styles'

const App = () => {
  return (
    <View style = {styles.container}>
      <Text style={styles.row}>React</Text>
      <Text style={styles.row}>native</Text>
    </View>
  )
}

export default App

