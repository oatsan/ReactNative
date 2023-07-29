import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cat from './components/Cat';
import Counter from './components/Counter';
import MyInput from './components/MyInput';
import IncrementCounter from './components/IncrementCounter';
import Form from './components/Form';
import Login from './components/Login';
import Recap from './components/Recap';

export default function App() {
  return (
    
    <View style={styles.container}>
      {/* <Counter/> */}
      {/* <MyInput/> */}
      {/* <IncrementCounter/> */}
        {/* <Form/>   */}
      {/* <Login/>  */}
      <Recap/>
    </View>
  );


  

}
const styles = StyleSheet.create({

  container:{

     flex:1,  

     justifyContent:'center',    

     alignItems:'center'  

  }

 })


