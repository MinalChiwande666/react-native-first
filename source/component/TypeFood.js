import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList,Animated } from 'react-native'
import React, { useState } from 'react'

const TypeFood = ({navigation,scrollindex}) => {
  const typefood = [
    {
      id: 1,
      name: 'Pizza',
      image: 'https://res.cloudinary.com/purnesh/image/upload/w_540,f_auto,q_auto:eco,c_limit/117819826-755555175235410-6274920532913199660-n1.jpg'
    },
    {
      id: 2,
      name: 'Burger',
      image: 'https://img.freepik.com/free-photo/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.jpg?w=2000'
    },
    {
      id: 3,
      name: 'Shwarma',
      image: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Shawarma-750x750.jpg'
    },
    {
      id: 4,
      name: 'Noodles',
      image: 'https://holycowvegan.net/wp-content/uploads/2021/04/indian-style-chili-garlic-noodles-featured-image.jpg'
    },
    {
      id: 5,
      name: 'Chicken Biryani',
      image: 'https://www.kannammacooks.com/wp-content/uploads/street-style-chicken-rice-recipe-1-3.jpg'
    }
  ]
  const max_height = 170
  const min_height = 7
  const distance = max_height - min_height
  const animatedheader = scrollindex.interpolate({
    inputRange: [0, distance],
    outputRange: [max_height , min_height],
    extrapolate: 'clamp'
  })
  const [typename,setname] = useState('')

  return (
    <View style={{paddingVertical:20,height:animatedheader,backgroundColor:'white'}}>
      <FlatList
     
        data={typefood}
        renderItem={({ item, i }) => (
          <TouchableOpacity 
          onPress={()=>
            {
              navigation.navigate('Food',{
                category:item.name
              })
            setname(item.name)}}
          style={typename===item.name?styles.typecard:styles.typecard2}>
            <Image source={{ uri: item.image}} style={styles.img} />
            <Text style={typename===item.name?styles.typetxt:styles.typetxt2}>{item.name}</Text>
          </TouchableOpacity>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        
      />
    </View>
  )
}
const styles = StyleSheet.create({
  img: {
    width: 40,
    height: 40,
    borderRadius: 50
  },
  typecard: {
    width: 78,
    backgroundColor: 'orange',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'center',
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 35,
    height: 80,
    padding: 5,
    marginHorizontal:5,
    elevation:6,
    
  },
  typecard2: {
    width: 78,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'center',
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 35,
    height: 80,
    padding: 5,
    marginHorizontal:5,
    elevation:6
  },
  typetxt: {
    color: '#fff',
    fontSize: 9,
    marginTop: 3,
    textAlign:'center'
  },
  typetxt2: {
    color: '#000',
    fontSize: 9,
    marginTop: 3,
    textAlign:'center'
  }
})
export default TypeFood