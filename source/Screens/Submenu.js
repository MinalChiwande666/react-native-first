import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../Shared/Header'
import Submenucom from '../component/Submenucom'

const Submenu = ({navigation,route}) => {
 
    const {item} = route.params;
    console.log(item)
  return (
   <>
   <SafeAreaView>
    <Header navigation={navigation}/>
   </SafeAreaView>
   <Submenucom item={item}/>
   </>
  )
}

export default Submenu