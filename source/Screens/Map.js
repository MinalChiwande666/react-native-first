import { View, Text } from 'react-native'
import React from 'react'
import MapCom from '../component/MapCom'
import Bottomnav from '../component/Bottomnav'

const Map = ({navigation}) => {
  return (
   <>
   <MapCom/>
   <Bottomnav navigation={navigation} nav={'Map'}/>
   </>
  )
}

export default Map