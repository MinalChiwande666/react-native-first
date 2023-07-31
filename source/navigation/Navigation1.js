import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../Screens/Home'
import Restaurant from '../Screens/Restaurant'
import Food from '../Screens/Food'
import Nearby from '../Screens/Nearby'
import Address from '../Screens/Address'
import Cart from '../Screens/Cart'
import Map from '../Screens/Map'
import Submenu from '../Screens/Submenu'
import BusinessMain from '../Screens/BusinessMain'
import { useSelector } from 'react-redux'
import BusinessNav from './BusinessNav'
import Profile from '../Screens/Profile'
import Single from '../Screens/Single'
import Category from '../Screens/Category'
import Related from '../Screens/Related'
const Navigation1 = () => {
  const rolemine = useSelector((state)=>{return state.register})
  console.log("role => ",rolemine.registerdetail.newform)
  const Stack = createNativeStackNavigator()
  return (
    <>
 
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        {
       rolemine.registerdetail.newform!=='Business' || rolemine.registerdetail.newform === undefined || rolemine.registerdetail.newform === ''?(
       <>
       <><Stack.Screen name='Home' component={Home} />
       <Stack.Screen name='Restaurant' component={Restaurant} />
       <Stack.Screen name='Food' component={Food} />
       <Stack.Screen name='Near by' component={Nearby} />
       <Stack.Screen name='profile' component={Profile}/>
       <Stack.Screen
            options={{
              animation: 'slide_from_bottom'
            }}
            name='Address' component={Address} />
            <Stack.Screen name='Cart' component={Cart} />
            <Stack.Screen name='Map' component={Map} />
            <Stack.Screen name='Submenu' component={Submenu} />
            <Stack.Screen name='Singleproduct' component={Single}/>
            <Stack.Screen name='Category' component={Category}/>
            <Stack.Screen name='related' component={Related}/>
            </>
       {/* */}
       </>):(
         <Stack.Screen name='business' component={BusinessNav}/>
       )

        }
      </Stack.Navigator>
   
    </>
  )
}

export default Navigation1