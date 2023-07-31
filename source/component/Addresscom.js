import { View, Text, StyleSheet, TextInput, Keyboard, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useDispatch } from 'react-redux'
import { addslice } from '../redux/addressSlice'
const Addresscom = ({navigation}) => {
  const dispatch = useDispatch()
  const [searchadd, setsearchadd] = useState('')
  const [address, setaddress] = useState([
    {
      id: 1,
      addressmain: 'Sadar',
      location: 'Near Buddha Vihar gandhi chowk'
    },
    {
      id: 2,
      addressmain: 'Sadar',
      location: 'Near Mangalwari Bazar'
    },
    {
      id: 3,
      addressmain: 'SitaBuldi',
      location: 'Near Modi No 3'
    },
    {
      id: 4,
      addressmain: 'Jafar Nagar',
      location: 'Jafar Nagar'
    }
  ])
  return (
    <View style={style.addresscon}>
      <View style={style.searchaddress}>
        <View style={style.searchcon}>
          <TextInput
            style={style.serach}
            value={searchadd}
            placeholder='Search address location'
            onChangeText={(e) => {
              setsearchadd(e)
            }}
          />
          <MaterialCommunityIcons
            name='magnify'
            color={'black'}
            size={25}
          />
        </View>

      </View>
      {
        address.filter((add) => {
          if (searchadd === '') {
            return null
          }
          else if (add.addressmain.toLocaleLowerCase().includes(searchadd.toLocaleLowerCase())) {
            return add
          }
        }).map((addr, i) => {
          return (
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center',backgroundColor:'white',elevation:2,marginVertical:10}}>
              <TouchableOpacity
              onPress={()=>{
                navigation.navigate('Home')
                dispatch(addslice.actions.setaddess(addr.addressmain))
              }}
              style={{ width: '90%', marginVertical: 10 }}>
                <View style={{ flexDirection: 'column' }}>
                  <View style={{flexDirection:'row'}}>
                    <Text style={{color:'black'}}>
                      Main:
                    </Text>
                    <Text>
                      {addr.addressmain}
                    </Text>
                  </View>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                   <Text style={{color:'black'}}>Location:</Text>
                   <Text style={{fontSize:9}}>{addr.location}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )
        })
      }
    </View>
  )
}
const style = StyleSheet.create({
  searchaddress: {

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  searchcon: {
    width: '90%',
    backgroundColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20
  },
  serach: {
    padding: 6
  },
  addresscon: {
    flex: 1,
    backgroundColor: 'white'
  }
})
export default Addresscom