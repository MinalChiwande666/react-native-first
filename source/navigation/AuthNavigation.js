import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../Screens/Login'
import Otp from '../Screens/Otp'
import Registration from '../Screens/Registration'

const AuthNavigation = () => {
    const AuthStack = createNativeStackNavigator()
  return (
 
     <AuthStack.Navigator 
     screenOptions={{
      headerShown:false
     }}>
        <AuthStack.Screen 
       
        name='login' component={Login}/>
        <AuthStack.Screen 
        options={{
          animation:'slide_from_right'
        }}
        name='Otp' component={Otp}/>
        <AuthStack.Screen name='register' component={Registration}/>
     </AuthStack.Navigator>
  
  )
}

export default AuthNavigation