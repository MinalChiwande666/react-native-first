import { View, Text, Image, StyleSheet, FlatList, useWindowDimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Animated,{useSharedValue,useAnimatedStyle, withSpring} from 'react-native-reanimated'
const Carousel = () => {
  const { width } = useWindowDimensions()
  const offset = useSharedValue(0)
  console.log(width)
  const [active, setactive] = useState(0)
  const [dishes, setdishes] = useState([
    {
      id: 1,
      name: 'Pizza',
      image: 'https://curlytales.com/wp-content/uploads/2019/11/Pizza.jpeg'
    },
    {
      id: 2,
      name: 'Pasta',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoVvJMmXOpYVqGE5RcGo9GLm6HomW8uFNAtQ&usqp=CAU'
    },
    {
      id: 3,
      name: 'Burger',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRElMkzobWy-P80DYXIdUBunuS9_IPwrxa6Q&usqp=CAU'
    },
    {
      id: 4,
      name: 'Biryani',
      image: 'https://paattiskitchen.com/wp-content/uploads/2023/02/kmc_20230226_002110-1.jpg'
    },
    {
      id: 5,
      name: 'Noodles',
      image: 'https://hot-thai-kitchen.com/wp-content/uploads/2021/11/chili-garlic-noodles-blog.jpg'
    }
  ])
  const animatedstyle = useAnimatedStyle(()=>{
    return{
      transform:[
        {
          translateX: withSpring(active)
        }
      ]
    }
  })
  // const scrolindicators = useRef(new Animated.Value(0)).current
  // console.log("indicators =>", scrolindicators)
  // const scroll = () => {
  //   Animated.spring(scrolindicators, {
  //     toValue: active,
  //     duration: 3000,
  //     useNativeDriver: true
  //   }).start()
  // }

  
  const scrollevent = (e) => {
    let scrollindex = e.nativeEvent.contentOffset.x / width
    console.log("scroll index =>", scrollindex)
    setactive(scrollindex)
    offset.value = scrollindex 
    // scroll()

   
  }

  const indicators = () => {
    return (
      <>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 5 }}>
          {
            dishes.map((item, i) => (

              <Animated.View style={[
               { width: i === active ? 10 : 5, height: 5, backgroundColor: active === i ? 'green' : 'red', borderRadius: 20, marginHorizontal: 2,},
               animatedstyle
               
              ]}>

              </Animated.View>
            ))
          }
        </View>
      </>
    )
  }

  return (
    <>

      <FlatList
        data={dishes}
        keyExtractor={(index) => { return index }}
        renderItem={({ item }) => {

          return (
            <>
              <Image source={{ uri: item.image }}
                style={{ width, height: 200 }}
              />

            </>
          )
        }}
        horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={scrollevent}
      />

      {indicators()}
    </>

  )
}
const style = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  }
})
export default Carousel