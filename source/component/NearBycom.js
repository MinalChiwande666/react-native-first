import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const NearBycom = () => {
    const addres = useSelector((state) => { return state.address.address })
    const [near, setnear] = useState([
        {
            id: 1,
            name: 'Sadar',
            name2: 'Yahi Cafe & Restro',
            address: 'Shop No. 1, VCA Ground, Sadar, Nagpur, Maharashtra 440001',
            number: '5678908769',
            image: 'https://lh5.googleusercontent.com/p/AF1QipOIup7BxDAsF4n2YR7om_EjVmkiZIhY6834w5nQ=w260-h175-n-k-no'
        },
        {
            id: 2,
            name: 'Sadar',
            name2: 'Carnations Restaurant',
            address: '60, Mount Rd, Sadar, Nagpur, Maharashtra 440001',
            number: '4567890876',
            image: 'https://lh5.googleusercontent.com/p/AF1QipNUnJm5ei5u0gno8Ewvze-0Kinz7gki9nMTjMiH=w260-h175-n-k-no'
        },
        {
            id: 3,
            name: 'Sitabuldi',
            name2: 'Naivedhyam Restaurant',
            address: '198-200 Rani Jhansi Square, Maharashtra 440012',
            number: '456789087657',
            image: 'https://lh5.googleusercontent.com/p/AF1QipMPzn1--LtixpvoZMOgYQxxbHZihT9ugdKenV8u=w260-h175-n-k-no'
        },
        {
            id: 4,
            name: 'Jafar Nagar',
            name2: 'Arabian Tandoor',
            address: '6, Borgaon Rd, Adarsh Colony, Jafar Nagar, New Mankapur, Nagpur, Maharashtra 440013',
            number: '65789099786',
            image: 'https://lh5.googleusercontent.com/p/AF1QipNDk2IR3KI2TCWugLZylH7QIKtfkuXZdHKjryTo=w260-h175-n-k-no'
        }
    ])
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={style.rescon}>
                {

                    near.filter((n) => {
                        if (addres === '') {
                            return n
                        }
                        if (n.name.toLocaleLowerCase().includes(addres.toLocaleLowerCase())) {
                            return n
                        }
                    }).map((near, i) => (
                        <View style={style.rescard}>
                            <Image source={{ uri: near.image }} style={style.img} />
                            <View style={{ marginHorizontal: 10 }}>
                                <Text style={style.resname}>{near.name2}</Text>
                                <Text style={style.addtxt}>{near.address}</Text>
                                <Text style={style.phonetxt}>{near.number}</Text>
                            </View>
                        </View>
                    ))

                }
            </View>
        </ScrollView>
    )
}
const style = StyleSheet.create({
    rescon: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 10
    },
    rescard: {
        padding: 10,
        borderRadius: 10,
        width: '90%',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 3,
        marginVertical: 10
    },
    resname: {
        color: 'black',
        fontSize: 10
    },
    addtxt: {
        color: 'lightgray',
        fontSize: 10,
        width: 140
    },
    phonetxt: {
        color: 'black',
        fontSize: 10
    }
})
export default NearBycom