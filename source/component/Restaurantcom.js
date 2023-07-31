import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'

const Restaurantcom = () => {
    const [restaurant, setrestaurnat] = useState([
        {
            id: 1,
            name: 'Ashoka Restaurant',
            address: '60, Mount Rd, Opp. LIC Office, Sadar 60, Nagpur, Maharashtra 440001',
            number: '072760 89911',
            image: 'https://lh5.googleusercontent.com/p/AF1QipNCNetI-R2oqytm8HC0yZvzOuFy68ov3fKw1g3Z=w260-h175-n-k-no'
        },
        {
            id: 2,
            name: 'Delicious Taste Food Restaurant',
            address: ' Shop no.45, Buti Compound, Mount Rd, Sadar, Nagpur, Maharashtra 440001',
            number: '56789080090',
            image: 'https://lh5.googleusercontent.com/p/AF1QipNnN4YhJagUs8UVXoD_p4gz8Re5BCJ4VbpSpFKl=w173-h175-n-k-no'
        },
        {
            id: 3,
            name: 'Bullock Cart Bar & Restaurant',
            address: 'Mount Rd, near Saraf Chamber, Liberty Chowk, Sadar, Nagpur, Maharashtra 440001',
            number: '34656787989',
            image: 'https://lh5.googleusercontent.com/p/AF1QipOilUw-W2QqLXYksALCiZeS6M7-oB6QbwcN94FQ=w260-h175-n-k-no'
        },
        {
            id: 3,
            name: 'Bullock Cart Bar & Restaurant',
            address: 'Mount Rd, near Saraf Chamber, Liberty Chowk, Sadar, Nagpur, Maharashtra 440001',
            number: '34656787989',
            image: 'https://lh5.googleusercontent.com/p/AF1QipOilUw-W2QqLXYksALCiZeS6M7-oB6QbwcN94FQ=w260-h175-n-k-no'
        },
        {
            id: 3,
            name: 'Bullock Cart Bar & Restaurant',
            address: 'Mount Rd, near Saraf Chamber, Liberty Chowk, Sadar, Nagpur, Maharashtra 440001',
            number: '34656787989',
            image: 'https://lh5.googleusercontent.com/p/AF1QipOilUw-W2QqLXYksALCiZeS6M7-oB6QbwcN94FQ=w260-h175-n-k-no'
        },
        {
            id: 3,
            name: 'Bullock Cart Bar & Restaurant',
            address: 'Mount Rd, near Saraf Chamber, Liberty Chowk, Sadar, Nagpur, Maharashtra 440001',
            number: '34656787989',
            image: 'https://lh5.googleusercontent.com/p/AF1QipOilUw-W2QqLXYksALCiZeS6M7-oB6QbwcN94FQ=w260-h175-n-k-no'
        },
    ])
    return (
        <ScrollView
        
        >
           
                <View style={style.rescon}>
                    {
                        restaurant.map((item, i) => {
                            return (
                                <View style={style.rescard}>
                                    <Image source={{ uri: item.image }} style={style.img} />
                                    <View style={{ marginHorizontal: 10 }}>
                                        <Text style={style.resname}>{item.name}</Text>
                                        <Text style={style.addtxt}>{item.address}</Text>
                                        <Text style={style.phonetxt}>{item.number}</Text>
                                    </View>
                                </View>
                            )
                        })
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
export default Restaurantcom