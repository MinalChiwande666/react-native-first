import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from './source/Shared/Header'
import Search from './source/Shared/Search'
import TypeFood from './source/component/TypeFood'
import Navigation1 from './source/navigation/Navigation1'
import { Provider, useSelector } from 'react-redux'
import { store } from './source/redux/store'
import AuthNavigation from './source/navigation/AuthNavigation'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import RootStack from './source/navigation/RootStack'

const App = () => {
 
  let getotp = ''
  const Main = createNativeStackNavigator()
  return (
    <>
      <Provider store={store}>
        {/* <Navigation1/> */}
        <NavigationContainer>
          <Main.Navigator
          screenOptions={{
            headerShown:false
          }}
          >
            <Main.Screen name="Main" component={RootStack}/>
          </Main.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  )
}

export default App