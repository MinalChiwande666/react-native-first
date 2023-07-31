import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const Singlecom = ({ navigation, name }) => {
    console.log("name => ", name)
    const [singleproduct, setsingleproduct] = useState({})
    // http://192.168.0.123:8080/product?productName=analog watch
    const getsingleproduct = async () => {
        let singlepro = await fetch(`http://192.168.0.123:8080/product?productName=${name}`)
        let getpro = await singlepro.json()
        console.log("products => ", getpro)
        setsingleproduct(getpro)
    }
    useEffect(() => {
        getsingleproduct()
    }, [])
    return (
        
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            
            <View>
                <TouchableOpacity 
                onPress={()=>{
                    navigation.goBack()
                }}
                style={style.arrow}>
                    <MaterialCommunityIcons
                        name='keyboard-backspace'
                        color="white"
                        size={35}
                    />
                </TouchableOpacity>
                <Image source={{ uri: `data:image/png;base64,${singleproduct?.data}` }} style={{ width: '100%', height: 400 }} />
            </View>
            <View style={style.maindetail}>
                 <Text style={style.proname}>{singleproduct.productName}</Text>
            </View>
            <View style={style.maindetail}>
                 <Text style={style.prodesc}>{singleproduct.description}</Text>
            </View>
            <View style={style.maindetail}>
                 <Text style={style.prodesc}>{singleproduct.brand}</Text>
            </View>
            <View style={[style.maindetail,{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}]}>
                 <Text style={style.proprice}>Rs.{singleproduct.price}</Text>
                 <Text style={[style.proprice,{fontSize:20}]}>Discount:{singleproduct.discount}%</Text>
            </View>
            <TouchableOpacity style={style.cartaddbtn}>
                <Text style={style.carttxt}>+ Add To Cart</Text>
            </TouchableOpacity>

           <TouchableOpacity
           onPress={()=>{
            navigation.navigate('related',{
                subproduct:singleproduct.subCategory
            })
           }}
           style={style.relared}>
            <Text style={style.relatedtxt}>Related Products</Text>
           </TouchableOpacity>
          
        </View>
      
    )
}
const style = StyleSheet.create({
    arrow: {
        position: 'absolute',
        zIndex: 999,
        top: 10,
        left: 10
    },
    maindetail:{
        backgroundColor:'#fff',
        padding:10
    },
    proname:{
        color:'black',
        fontSize:30
    },
    prodesc:{
        fontSize:20,
        color:'gray'
    },
    probarnd:{
        color:'gray',
        fontSize:15
    },
    proprice:{
        fontSize:15,
        color:'black'
    },
    cartaddbtn:{
        width:'90%',
        backgroundColor:'orange',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:20,
        position:'absolute',
        bottom:30,
        padding:10,
        borderRadius:20
    },
    carttxt:{
        color:'white',
        fontSize:20
    },
    relared:{
        width:'50%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        padding:10,
        backgroundColor:'orange',
        marginLeft:10
    },
    relatedtxt:{
        color:'white',
        fontSize:10
    }
})
export default Singlecom