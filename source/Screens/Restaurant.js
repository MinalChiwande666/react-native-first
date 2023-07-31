import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../Shared/Header'
import Bottomnav from '../component/Bottomnav'
import Restaurantcom from '../component/Restaurantcom'
const Restaurant = ({ navigation }) => {
  return (
    <>
      <SafeAreaView>
        <Header navigation={navigation} />
      </SafeAreaView>
      <Restaurantcom />
      <Bottomnav nav={'Restaurant'} navigation={navigation} />
    </>
  )
}

export default Restaurant