import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home'
import Reading   from './screens/Reading';
import { StackView } from '@react-navigation/stack';


const Tab = createBottomTabNavigator()

function MyTabs(){
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Reading" component={Reading}/>
    </Tab.Navigator>
  )
}
export default function App() {
  return (

    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
