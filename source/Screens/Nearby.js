import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../Shared/Header'
import Bottomnav from '../component/Bottomnav'
import NearBycom from '../component/NearBycom'

const Nearby = ({navigation}) => {
  return (
    <>
    <SafeAreaView>
        <Header navigation={navigation}/>
    </SafeAreaView>
    <NearBycom/>
    <Bottomnav nav={'Near by'} navigation={navigation}/>
    </>
  )
}

export default Nearby