import { View, Text } from 'react-native'
import React from 'react'
import Categorycom from '../component/Categorycom'

const Category = ({navigation,route}) => {
    const {category} = route.params
  return (
   <>
   <Categorycom navigation={navigation} category={category}/>
   </>
  )
}

export default Category