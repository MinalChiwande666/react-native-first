import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

const Submenucom = ({ item }) => {
    

    const getcustoemr = async()=>{
     const res = await fetch('http://192.168.0.125:8080/restaurant/customer')
     const customer = await res.json()
     console.log(customer, "<=customer get")
    }
    useEffect(()=>{
     getcustoemr()
    },[])
    const morefood = [
        {
            id: 1,
            name: 'Pizza',
            image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Chicken-Pizza_exps30800_FM143298B03_11_8bC_RMS-9.jpg',
            desc: 'Fire up your taste buds with this fiery and flavorful pizza. The zesty tomato sauce, gooey cheese, ...',
            ratings: 5
        },
        {
            id: 1,
            name: 'Pizza',
            image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Chicken-Pizza_exps30800_FM143298B03_11_8bC_RMS-9.jpg',
            desc: 'Fire up your taste buds with this fiery and flavorful pizza. The zesty tomato sauce, gooey cheese, ...',
            ratings: 5
        },
        {
            id: 1,
            name: 'Pizza',
            image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Chicken-Pizza_exps30800_FM143298B03_11_8bC_RMS-9.jpg',
            desc: 'Fire up your taste buds with this fiery and flavorful pizza. The zesty tomato sauce, gooey cheese, ...',
            ratings: 5
        },
        {
            id: 1,
            name: 'Pizza',
            image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Chicken-Pizza_exps30800_FM143298B03_11_8bC_RMS-9.jpg',
            desc: 'Fire up your taste buds with this fiery and flavorful pizza. The zesty tomato sauce, gooey cheese, ...',
            ratings: 5
        },

    ]
    return (
        <>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
               
                    <ScrollView>
                    <View style={style.categorycardcon}>
                        {
                         
                            morefood
                            .filter((serach)=>{
                                if(serach.name === item.Category)
                                {
                                    return serach
                                }
                                else if(serach.name !== item.Category )
                                {
                                   return null
                                }
                            })
                            .map((foods, i) => (

                                <View style={style.card}>
                                   
                                    <View>
                                        <Image source={{ uri: foods.image }} style={style.image} />
                                    </View>
                                    <View style={{ marginHorizontal: 10 }}>
                                        <View>
                                            <Text style={style.name}>{foods.name}</Text>
                                        </View>
                                        <View>
                                            <Text style={style.desc}>{foods.desc}</Text>
                                        </View>
                                        
                                    </View>
                                </View>
                            ))
                        }
                         </View>
                    </ScrollView>
               
            </View>
        </>
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
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        width: '90%',
        flexDirection: 'row',
        elevation: 3,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 10
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
export default Submenucom