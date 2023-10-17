import { View, Text } from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthNavigation from './AuthNavigation'
import Navigation1 from './Navigation1'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const RootStack = () => {
    const [authuser,setauthuser] = useState(null)
    const otpverify = useSelector((state) => { return state.phoneotp.otp })
    console.log(otpverify)

    const RootStack = createNativeStackNavigator()
   
   useEffect(()=>{
    AsyncStorage.getItem('user').then((data)=>{
        console.warn(data)
       return setauthuser(JSON.parse(data))
    })
       
   },[authuser])
  
    return (
        <>
            <RootStack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                
            >
                {
                    otpverify === '' || otpverify === null ? (
                        <RootStack.Screen name='Auth' component={AuthNavigation} />) :
                       <RootStack.Screen name='App' component={Navigation1} /> 
                            
                    }
            </RootStack.Navigator>
        </>
    )
}

export default RootStack