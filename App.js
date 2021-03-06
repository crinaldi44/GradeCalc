import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SplashScreen from "./src/screens/SplashScreen";
import MainScreen from "./src/screens/MainScreen";
import ResultsScreen from "./src/screens/ResultsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
            name='Splash'
            component={SplashScreen}
          />
        <Stack.Screen
          name='Main'
          component={MainScreen}
          />
        <Stack.Screen
          name='Results'
          component={ResultsScreen}
          options={{
            headerTitle: '',
            headerShown: true,
            headerTransparent: true,
            headerBackTitleVisible: false,
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
