import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Profilecom = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#fff' }}>
      <View style={style.profilehead}>
        <View>
          <TouchableOpacity
          onPress={()=>{
            navigation.goBack()
          }}
          >
            <MaterialCommunityIcons
              name='keyboard-backspace'
              color="white"
              size={35}
            />
          </TouchableOpacity>
        </View>
        <View style={style.profileimgbox}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' }} style={{ width: 110, height: 110, borderRadius: 70 }} />
        </View>
      </View>
      <View style={style.maindet}>
        <View style={{ marginTop: 50 }}>
          <TouchableOpacity style={style.detcard}>
            <Text>Your Name</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.detcard}>
            <Text>Your Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.detcard}>
            <Text>Your Contact</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.detcard}>
            <Text>Update Your Delivery Address</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
const style = StyleSheet.create({
  profilehead: {
    backgroundColor: 'orange',
    width: '100%',
    zIndex: -1
  },
  profileimgbox: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20%',
    zIndex: -1
  },
  maindet: {
    position: 'absolute',
    backgroundColor: 'white',
    top: 250,
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    zIndex: 999,
    flexDirection: 'column',
    
  },
  detcard: {
    width: '90%',
    elevation: 3,
    padding: 10,
    backgroundColor: 'white',
    marginHorizontal:15,
    borderRadius:10,
    marginTop:10
  }
})
export default Profilecom