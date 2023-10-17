import { View, Text, StyleSheet, Image, TouchableOpacity, Touchable, PermissionsAndroid, Animated } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useDispatch, useSelector } from 'react-redux'
import Geolocation from '@react-native-community/geolocation'
import { otpget } from '../redux/otp'
import TypeFood from '../component/TypeFood'
import AsyncStorage from '@react-native-async-storage/async-storage'
const Header = ({ navigation }) => {
  const [currlongitude, setcurrlogitude] = useState('')
  const [currlatitude, setcurrlatitude] = useState('')
  const [locationStatus, setlocationStatus] = useState('')
  const addre = useSelector((state) => { return state.address.address })
  const cartitem = useSelector((state) => { return state.addcart })
  const dispatch = useDispatch()
  const locationpermission = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Access Required',
        message: 'App needs to access your location'
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      getOneTimeLocation();

    } else {
      setlocationStatus('Permission Denied')
    }
  }

  const logout = async()=>{
  // await AsyncStorage.removeItem('user')
  dispatch(otpget.actions.setlogout(null))
  // navigation.navigate('Auth')
  }
  useEffect(() => {

    console.log("latitude => ", currlatitude)
    console.log("longitude => ", currlongitude)
  }, [currlatitude, currlatitude])

  const getOneTimeLocation = async () => {
    setlocationStatus('Getting Location Status')
    Geolocation.getCurrentPosition((position) => {
      setlocationStatus('You are Here')
      console.log("position =>", position)
      const currentLongitude = JSON.stringify(position.coords.longitude);
      const currentLatitude = JSON.stringify(position.coords.latitude);

      setcurrlogitude(currentLongitude)
      setcurrlatitude(currentLatitude)
    },
      (error) => {
        setlocationStatus(error.message)
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000
      }
    )
  }

  // const subscribeLocation = ()=>{
  //   const watchId = Geolocation.watchPosition()
  // }
  return (
    <View style={[styles.headercon]}>
      <View style={{ flexDirection: 'column' }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Address')}
          style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MaterialCommunityIcons
            name="near-me"
            size={20}
            color="orange"
          />
          <Text>{addre === null || addre === undefined ? 'Sadar' : addre}</Text>

          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color="black"
          />

        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => locationpermission()}
          style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 0.5 }}>
          <MaterialCommunityIcons
            name='target'
            color='orange'
            size={24}
          />
          <Text style={{ fontSize: 8 }}>Use My Current Location</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity
        onPress={()=>{
          navigation.navigate('profile')
        }}
        >
          <MaterialCommunityIcons
          name='account-outline'
          color='orange'
          size={25}
          />
        </TouchableOpacity>
        {/* <Image source={{ uri: 'https://marketplace.canva.com/EAFYecj_1Sc/1/0/1600w/canva-cream-and-black-simple-elegant-catering-food-logo-2LPev1tJbrg.jpg' }} style={styles.imglogo} /> */}
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <View style={{ width: 12, height: 12, backgroundColor: 'red', position: 'absolute', top: -3, borderRadius: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', zIndex: 999 }}>
            <Text style={{ fontSize: 7, color: 'white' }}>{cartitem.item.length === 0 ? 0 : cartitem.item.length}</Text>
          </View>
          <MaterialCommunityIcons
            name='cart-outline'
            color="black"
            size={24}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            logout()
            // dispatch(otpget.actions.setlogout(null))
            // navigation.navigate('Auth')
          }}
        >
          <MaterialCommunityIcons
            name="logout"
            color="orange"
            size={24}
          />
        </TouchableOpacity>
      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  headercon: {
    backgroundColor: 'white',

    position: 'relative',
    top: 0,
    zIndex: 999,
    padding: 15,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between"
  },
  imglogo: {
    width: 50,
    height: 35,
    borderRadius: 50
  }
})
export default Header