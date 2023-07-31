import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Addresscom from '../component/Addresscom'
const Address = ({navigation}) => {
  return (
    <>
     <Addresscom navigation={navigation}/>
    </>
  )
}

export default Address