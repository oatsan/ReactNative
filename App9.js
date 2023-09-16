import { StyleSheet, Text, View } from "react-native";

import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";

import { createDrawerNavigator } from "@react-navigation/drawer";

import React from "react";

import FirstPage from "./components/pages/FirstPage";

import SecondPage from "./components/pages/SecondPage";
import CustomSideBarMenu from "./components/pages/CustomSideBarMenu";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Feed</Text>
    </View>
  );
}

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Article</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function FirstScreenStack() {
  return (
    <Stack.Navigator

    initialRouteName="FirstPage"
    screenOptions={{headerShown:false}}
   
    >
      <Stack.Screen
        name="First"
        component={FirstPage}
        options={{ title: "FirstPage" }}
      />
    </Stack.Navigator>
  );
}

function SecondScreenStack() {
  return (
    <Stack.Navigator
    initialRouteName="SecondPage"
    screenOptions={{headerShown:false}}
  
    >
      <Stack.Screen
        name="Second"
        component={SecondPage}
        options={{ title: "SecondPage" }}
      />
    </Stack.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#e6e6fa",

          width: 240,
        },
      }}


      drawerContent={(props)=><CustomSideBarMenu{...props}/>}





    >
      <Drawer.Screen
        name="FirstDrawer"
        component={FirstScreenStack}
        options={{ drawerLabel: "First Page Option" }}
      />

      <Drawer.Screen
        name="Second"
        component={SecondScreenStack}
        options={{ drawerLabel: "Second Page Option" }}
      />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
