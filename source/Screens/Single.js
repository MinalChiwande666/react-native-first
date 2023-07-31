import { View, Text } from 'react-native'
import React from 'react'
import Singlecom from '../component/Singlecom'

const Single = ({navigation,route}) => {
    const {name} = route.params
  return (
    <>
    <Singlecom navigation={navigation} name={name}/>
    </>
  )
}

export default Single