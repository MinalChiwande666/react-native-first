import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView, Animated } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cart } from '../redux/addcartSlice'

const Foodcom = ({ navigation }) => {
  const scrollindex = useRef(new Animated.Value(0)).current
  const cartdet = useSelector((state) => { return state.addcart })
  const [foodget, setfoodget] = useState('')
  const [products, setproducts] = useState([])
  const [category, setcategory] = useState([])
  const dispatch = useDispatch()

  const getproducts = async () => {
    let product = await fetch('http://192.168.0.123:8080/productList')
    let get = await product.json();
    setproducts(get)
  }
  const getcategory = async () => {
    let category = await fetch('http://192.168.0.123:8080/categoryList')
    let getcat = await category.json()
    console.log(getcat, "categories")
    setcategory(getcat)
  }
  useEffect(() => {
    getcategory()
    getproducts()
    cartdet.item.filter((id) => {
      if (id.id === 1) {
        // console.log(id)
      }
    })
  }, [cartdet.item])

  const max_height = 50
  const min_height = 0
  const distance = max_height - min_height
  const animatedheader = scrollindex.interpolate({
    inputRange: [0, distance],
    outputRange: [max_height, min_height],
    extrapolate: 'clamp'
  })

  // const [foods, setfoods] = useState([
  //   {
  //     id: 1,
  //     Category: 'Pizza',
  //     name: 'Margaretha',
  //     prize: 230,
  //     image: 'https://static.toiimg.com/thumb/56868564.cms?width=1200&height=900',
  //     description: 'Cheze grilled margaretha pizza',
  //     qty: 1,
  //     isadded: false
  //   },
  //   {
  //     id: 2,
  //     Category: 'Pasta',
  //     name: 'Sause pasta',
  //     prize: 90,
  //     image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/75c25eb5538b4b3c91fdf71e747c1e84/BFV44742_PantryPasta_FB_Final.jpg',
  //     description: 'Pasta with Sause',
  //     qty: 1,
  //     isadded: false
  //   },
  //   {
  //     id: 3,
  //     Category: 'Noodles',
  //     name: 'Veg Noodles',
  //     prize: 130,
  //     image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/veg-noodles-vegetable-noodles-recipe.jpg',
  //     description: 'veg noodles with garlic and capcicum',
  //     qty: 1,
  //     isadded: false
  //   },
  //   {
  //     id: 4,
  //     Category: 'Burger',
  //     name: 'Mcdonalds burger King',
  //     prize: 100,
  //     image: 'https://static.toiimg.com/thumb/83565509.cms?width=1200&height=900',
  //     description: 'Mcdonalds cheese burger',
  //     qty: 1,
  //     isadded: false
  //   }

  // ])
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={style.foodsearch}>
        <View style={style.search}>
          <TextInput
            value={foodget}
            placeholder='Search Your Food'
            style={style.input}
            onChangeText={(e) => {
              setfoodget(e)
            }}
          />
        </View>
      </View>

      <Animated.View style={{ width: '100%', height: animatedheader, opacity: animatedheader, padding: 10, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center' }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {
            category.map((cat, i) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Category',
                    {
                      category: cat.categoryName
                    })
                }}
                style={{ width: '20%', marginHorizontal: 10, backgroundColor: 'lightgray', padding: 4, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 30 }}>
                <Text>{cat.categoryName}</Text>
              </TouchableOpacity>
            ))
          }
        </ScrollView>
      </Animated.View>

      <ScrollView
        contentContainerStyle={{ width: '100%'}}
        scrollEventThrottle={12}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollindex } } }],
          { useNativeDriver: false }
        )}

      >

        <View style={style.categorycardcon}>
          {
            products.filter((f) => {
              if (foodget === '') {
                return f
              }
              else if (f.Category.toLocaleLowerCase().includes(foodget.toLocaleLowerCase())) {
                return f
              }
            }).map((item, i) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Singleproduct', {
                    name: item.productName
                  })}
                  key={i}
                  style={style.card}>
                  <View>
                    <Image source={{ uri: `data:image/png;base64,${item.data}` }} style={style.image} />
                  </View>
                  <View style={{ marginHorizontal: 10 }}>
                    <View>
                      <Text style={style.name}>{item.productName}</Text>
                    </View>
                    <View>
                      <Text style={style.desc}>{item.description}</Text>
                    </View>
                    <View>
                      <Text style={style.name}>Rs.{item.price}</Text>
                    </View>
                    <View>
                      <Text style={style.name}>Brand:{item.brand}</Text>
                    </View>
                    <View>
                      <Text style={style.name}>Discount:{item.discount}%</Text>
                    </View>
                    {/* <View>
                      <TouchableOpacity
                        disabled={cartdet.disabled}
                        onPress={() => {
                          dispatch(cart.actions.setcart(item))
                        }
                        }
                        style={style.addbtn}>
                        <Text style={style.addtxt}>Add to Cart</Text>
                      </TouchableOpacity>
                    </View> */}
                  </View>
                </TouchableOpacity>
              )
            })

          }
        </View>
      </ScrollView>
    </View>
  )
}
const style = StyleSheet.create({
  foodsearch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderBottomColor: 'lightgray',
    borderWidth: 0.6,
    borderTopWidth: 0
  },
  search: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    backgroundColor: 'lightgray',

  },
  input: {
    padding: 4
  },
  categorycardcon: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',

    // justifyContent: 'center'
  },
  card: {
    width: '50%',
    flexDirection: 'column',
    elevation: 3,
    backgroundColor: 'white',
    padding: 10,
    // borderRadius: 10,
    alignItems: 'center',
    // marginVertical: 10,

  },
  image: {
    width: 150,
    height: 120,
    borderRadius: 10
  },
  name: {
    color: 'black',
    fontSize: 10
  },
  desc: {
    fontSize: 7,
    marginTop: 10,
    color: 'lightgray'
  },
  addbtn: {
    width: 90,
    backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 10

  },
  addtxt: {
    color: 'white'
  }
})
export default Foodcom