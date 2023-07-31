import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity,Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import Search from '../Shared/Search'
import TypeFood from './TypeFood'
import Carousel from './Carousel'
import AsyncStorage from '@react-native-async-storage/async-storage'
const Homecom = ({ navigation, mainadd }) => {
  console.log("main add=>", mainadd)
  const offers = [
    {
      id: 1,
      image: 'https://cdn.grabon.in/gograbon/images/web-images/uploads/1618575517942/food-coupons.jpg'
    },
    {
      id: 2,
      image: 'https://cdn.grabon.in/gograbon/images/category/1546252575451.png'
    }
  ]
  // const scrollindex = useRef(0)
  const scrollindex = useRef(new Animated.Value(0)).current

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* <Search/> */}
      <TypeFood scrollindex={scrollindex}  navigation={navigation}/>
      <ScrollView
      >
       
        <Carousel />
        <View >

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ padding: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
          >
            {
              offers.map((item, i) => (
                <>
                  <TouchableOpacity>
                    <Image source={{ uri: item.image }} style={style.imagecard} />
                  </TouchableOpacity>
                </>
              ))
            }
          </ScrollView>
        </View>
        <View style={style.cardhomecon}>
          <View style={style.card}>
            <Image source={{ uri: 'https://www.cypressgreen.in/blog/wp-content/uploads/2021/03/food.jpg' }} style={style.cardimg} />
            <View style={{ marginTop: 30 }}>
              <Text style={{ fontSize: 20, color: 'lightgrey' }}>Enjoy Your Food!!</Text>
              <Text style={{ color: 'black' }}>Order Now Get Your Hunger Down</Text>
            </View>
          </View>
        </View>
        <View style={style.btmcon}>
          <View>
            <Text style={{ fontSize: 40, fontWeight: 800, color: 'gray' }}>Live It Up!!</Text>
            <Text style={{ fontSize: 20, fontWeight: 800, color: 'gray' }}>Enjoy Our Meal</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const style = StyleSheet.create({
  imagecard: {
    width: 250,
    height: 140,
    borderRadius: 20,
    marginHorizontal: 10
  },
  cardhomecon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  cardimg: {
    width: 270,
    height: 280,
    borderRadius: 20
  },
  card: {
    marginTop: 20,
    width: 290,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: 'white'
  },
  btmcon: {
    backgroundColor: 'lightgrey',
    marginTop: 10,
    padding: 20,
    height: 250
  }

})
export default Homecom