import { View, Text, SafeAreaView, Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import Header from '../Shared/Header'
import Homecom from '../component/Homecom'
import Bottomnav from '../component/Bottomnav'


const Home = ({navigation,route}) => {
  
  
  return (
    <>
    <SafeAreaView style={{position:'relative',top:'always'}}>
        <Header navigation={navigation}/>
    </SafeAreaView>
    <Homecom navigation={navigation}/>
    <Bottomnav nav={'Home'} navigation={navigation}/>
    </>
  )
}

export default Home