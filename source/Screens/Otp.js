import { View, Text } from 'react-native'
import React from 'react'
import OTPCom from '../component/OTPCom'

const Otp = ({navigation,route}) => {
    const {phonenp} = route.params
  return (
   <>
   <OTPCom navigation={navigation} phoneno={phonenp}/>
   </>
  )
}

export default Otp