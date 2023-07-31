import { View, Text } from 'react-native'
import React from 'react'
import Relatedcom from '../component/Relatedcom'

const Related = ({navigation,route}) => {
    const {subproduct} = route.params
  return (
   <>
   <Relatedcom navigation={navigation} subproduct={subproduct}/>
   </>
  )
}

export default Related