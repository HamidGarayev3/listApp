import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import WorkScreen from './src/navigation/stack/WorkScreen';
import StarScreen from './src/navigation/stack/StarScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FavoritesProvider } from './context/FavoritesContext';


const Tab = createBottomTabNavigator()




const App = () => {
  return (
    <FavoritesProvider>
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name='WorkScreen' component={WorkScreen}></Tab.Screen>
      <Tab.Screen name='StarScreen' component={StarScreen}></Tab.Screen>
      </Tab.Navigator>
          </NavigationContainer>
    </FavoritesProvider>

  )
}

export default App