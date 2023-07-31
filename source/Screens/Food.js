import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../Shared/Header'
import Bottomnav from '../component/Bottomnav'
import Foodcom from '../component/Foodcom'

const Food = ({ navigation }) => {
  
  return (
    <>
      <SafeAreaView>
        <Header navigation={navigation}/>
      </SafeAreaView>
      <Foodcom navigation={navigation}/>
      <Bottomnav nav={'Food'} navigation={navigation} />
    </>
  )
}

export default Food