import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const Bottomnav = ({ nav, navigation }) => {
    console.log('nav =>', nav)
    return (
        <>
            <View style={styles.btmcon}>
                <View style={styles.btmmaincon}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                        style={styles.tabbtn}>
                        <MaterialCommunityIcons
                            name='home-variant-outline'
                            color={nav === 'Home' ? 'orange' : 'black'}
                            size={25}
                        />
                        <Text style={nav ? { color: 'black', fontSize: 10 } : styles.tabtxt}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Food')}
                        style={styles.tabbtn}>
                        <MaterialCommunityIcons
                            name='food-takeout-box-outline'
                            color={nav === 'Food' ? 'orange' : 'black'}
                            size={25}
                        />
                        <Text style={styles.tabtxt}>Food</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Restaurant')}
                        style={styles.tabbtn}>
                        <MaterialCommunityIcons
                            name='silverware-fork-knife'
                            color={nav === 'Restaurant' ? 'orange' : 'black'}
                            size={25}
                        />
                        <Text style={styles.tabtxt}>Restaurants</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Near by')}
                        style={styles.tabbtn}>
                        <MaterialCommunityIcons
                            name='store-marker-outline'
                            color={nav === 'Near by' ? 'orange' : 'black'}
                            size={25}
                        />
                        <Text style={styles.tabtxt}>Near by</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Map')}
                        style={styles.tabbtn}>
                        <MaterialCommunityIcons
                            name='map-marker-left-outline'
                            color={nav === 'Map' ? 'orange' : 'black'}
                            size={25}
                        />
                        <Text style={styles.tabtxt}>Location</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    btmcon: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        elevation: 10,
        position: 'relative'
    },
    btmmaincon: {
        width: '95%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    tabbtn: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabtxt: {
        fontSize: 10,
        color: 'lightgray'
    }
})
export default Bottomnav