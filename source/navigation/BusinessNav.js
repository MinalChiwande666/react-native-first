import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BusinessMain from '../Screens/BusinessMain'
const BusinessNav = () => {
    const BusinessStack = createNativeStackNavigator()
  return (
   <>
   <BusinessStack.Navigator>
    <BusinessStack.Screen name='business' component={BusinessMain}/>
   </BusinessStack.Navigator>
   </>
  )
}

export default BusinessNav