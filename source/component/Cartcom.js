import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cart } from '../redux/addcartSlice'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { addslice } from '../redux/addressSlice'
const Cartcom = () => {
  const cartitem = useSelector((state) => { return state.addcart })

  const [cartarr, setcartarr] = useState(cartitem.item)
  const [totalarr, settotalarr] = useState()
  const [total, settotal] = useState([])
  const [price, setprice] = useState()
  const dispatch = useDispatch()


  useEffect(() => {
    let temp = 0;
    cartitem.item.map((item, i) => {
      temp = temp + item.prize * item.qty
    })
    // console.log(temp)
    settotalarr(temp)
  }, [cartitem.item])
  console.log(totalarr)
  return (
    <ScrollView
      contentContainerStyle={{ flex: 1, backgroundColor: 'white' }}
    >

      <View style={{}}>
        <View style={style.head}>
          <View style={style.headcon}>
            <Text style={style.headtxt}>Your Saved Meals!!</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          {
            cartitem.item === undefined || cartitem.item.length === 0 ?
              <><Image source={{ uri: 'https://i.pinimg.com/originals/4e/95/ff/4e95ff2406e7914e70cbbba6dd9c51d2.jpg' }} style={[style.image, { marginTop: 100 }]} /><Text style={{ fontSize: 20, color: 'black', fontWeight: '800' }}>Add Your Meal !!</Text></>
              :
              cartitem.item.map((item, i) => {


                return (
                  <>
                    <View style={style.cartcard}>
                      <View>
                        <Image source={{ uri: item.image }} style={style.image} />
                      </View>
                      <View style={{ marginHorizontal: 10 }}>
                        <View>
                          <Text style={style.nametxt}>{item.name}</Text>
                        </View>
                        <View>
                          <Text style={style.desc}>{item.description}</Text>
                        </View>
                        <View>
                          <Text>{item.prize * item.qty}</Text>
                        </View>
                        <View style={style.qty}>
                          <TouchableOpacity
                            disabled={item.qty === 0}
                            onPress={() => {
                              dispatch(cart.actions.handleqty({ id: item.id, act: 'minus' }))
                            }}
                            style={style.add}>
                            <Text style={style.addicon}>-</Text>
                          </TouchableOpacity>
                          <Text>{item.qty}</Text>
                          <TouchableOpacity
                            onPress={() => {
                              dispatch(cart.actions.handleqty({ id: item.id, act: 'add' }))
                            }}
                            style={style.add}>
                            <Text style={style.addicon}>+</Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => dispatch(cart.actions.remove(i))}>
                            <MaterialCommunityIcons
                              name="delete"
                              color="red"
                              size={24}
                              style={{ marginLeft: 80 }}
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </>
                )
              })
          }
        </View>
        {/* <View style={style.totalcon}>
          <View style={style.totalbox}>
            <Text>Total</Text>
            {
              cartitem.item.map((p, i) => {
                let pr = p.prize
                console.log("prize =>",pr)
                return (
                  <Text>{p.prize}</Text>
                )
              })
            }
          </View>
        </View> */}
        <View style={style.ordercon}>
          <View style={style.totalcon}>
            <View>
              <Text>Total:</Text>
            </View>
            <Text>{totalarr}</Text>
          </View>
        </View>
        {
          cartitem.item.length === 0 ? null :
            <View style={style.ordercon}>
              <TouchableOpacity style={style.order}>
                <Text style={style.ordertxt}>Order Now</Text>
              </TouchableOpacity>
            </View>}
      </View>
    </ScrollView>

  )
}
const style = StyleSheet.create({
  headtxt: {
    color: 'black',
    fontSize: 20,
    fontWeight: "700"
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white',
    elevation: 2
  },
  headcon: {
    width: '90%'
  },
  cartcard: {
    width: '90%',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
    marginVertical: 10,
    padding: 10,
    borderRadius: 10
  },
  totalcon:{
    width: '90%',
    flexDirection: 'row',
    padding:10
  },
  image: {
    width: 100,
    height: 100
  },
  nametxt: {
    color: 'black',
    fontSize: 10
  },
  desc: {
    fontSize: 8
  },
  qty: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  add: {
    width: 30,
    backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginHorizontal: 2
  },
  addicon: {
    color: 'white',
    fontSize: 16,

  },
  ordercon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  order: {
    width: '90%',
    backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,

  },
  ordertxt: {
    color: 'white'
  },
 
  totalbox: {
    width: '90%',
    padding: 10
  }
})
export default Cartcom