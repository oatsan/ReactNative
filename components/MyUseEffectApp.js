import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyUseEffectApp = () => {
  return (
    <View>
      <Text>MyUseEffectApp</Text>
    </View>
  )
}

export default MyUseEffectApp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    time: {
        fontSize: 18,
    },
})