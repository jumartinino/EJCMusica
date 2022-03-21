import React from 'react';

//navigation
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import Home from './src/screens/homepage';
import Profile from './src/screens/profile';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{
        headerShown: false}}/>

        <Stack.Screen name='Profile' component={Profile} options={{
        headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;