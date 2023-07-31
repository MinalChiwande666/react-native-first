import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { SafeAreaView } from 'react-native-safe-area-context'
const Categorycom = ({ navigation, category }) => {
    const [categoryitems, setcategoryitems] = useState([])
    console.log(category)
    const getcategoryitem = async () => {
        let getcat = await fetch(`http://192.168.0.123:8080/productListByCategory?category=${category}`)
        let cat = await getcat.json()
        console.log(cat)
        setcategoryitems(cat)
    }

    useEffect(() => {
        getcategoryitem()
    }, [])
    return (
        <>
            <SafeAreaView>
                <View style={style.cathead}>
                    <TouchableOpacity>
                    <MaterialCommunityIcons
                    name='keyboard-backspace'
                    size={29}
                    color="black"
                    />
                    </TouchableOpacity>
                    <View>
                        <Text style={style.cattxt}>Category</Text>
                    </View>
                </View>
            </SafeAreaView>
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                
                    <View style={style.categorycardcon}>
                        {
                            categoryitems.map((item, i) => (
                                <>
                                    <TouchableOpacity
                                     onPress={() => navigation.navigate('Singleproduct', {
                                        name: item.productName
                                      })}
                                        
                                        style={style.card}
                                    >
                                        <View>
                                            <Image source={{ uri: `data:image/png;base64,${item.data}` }} style={style.image} />
                                        </View>
                                        <Text style={style.name}>{item.productName}</Text>
                                        <Text style={style.qty}>{item.quantity}</Text>
                                        <Text>{item.brand}</Text>
                                    </TouchableOpacity>
                                </>
                            ))
                        }
                    </View>
            
            </View>
        </>
    )
}

const style = StyleSheet.create({
    cathead: {
        width: '100%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        position:'relative',
        zIndex:999,
        elevation: 3
    },
    categorycardcon: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        width: '100%'
        // justifyContent: 'center'
    },
    cattxt: {
        color: 'black',
        fontSize: 20,
        marginHorizontal: 10
    },
    image: {
        width: '100%',
        height: 150,
        // borderRadius: 10
    },
    card: {
        width: '50%',
        flexDirection: 'column',
        elevation: 3,
        backgroundColor: 'white',
        padding: 10,
        // borderRadius: 10,
        // alignItems: 'center',
        // marginVertical: 10,

    },
    name: {
        color: 'black',
        fontSize: 15,
        fontWeight: '700'
    },
    qty: {
        color: 'black',
        fontSize: 15,

    },
    catcardcon: {
        width: '95%',
        flexDirection: 'row',
        marginHorizontal: 15,
        flexWrap: 'wrap',
        padding: 20
    }
})

export default Categorycom