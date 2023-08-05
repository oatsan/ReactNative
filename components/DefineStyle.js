import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './styles'

const DefineStyle = () => {
  return (
    <view style = {styles.container}>
    <Text style = {[styles.title,styles.warning]}>Hello World</Text>
</view>
  )
}

export default DefineStyle

