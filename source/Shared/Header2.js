import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Header2 = () => {
    return (
        <View style={style.headermain}>
            <View style={style.headuser}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity style={style.profileimgcon}>
                        <MaterialCommunityIcons
                            name='account'
                            color="orange"
                            size={24}
                        />

                    </TouchableOpacity>
                    <View>
                        <Text style={style.nametxt}>Hi Minal</Text>

                        <Text>Lets grab your food!</Text>
                    </View>
                </View>
                <View style={{ marginHorizontal: 10 }}>
                    <MaterialCommunityIcons
                        name='bell-outline'
                        size={24}
                        color="orange"
                    />
                </View>
            </View>
            <View style={style.searchcon}>
                <View style={style.serachbox}>
                    <MaterialCommunityIcons
                        name="magnify"
                        color="black"
                        size={23}
                    />
                    <TextInput
                        style={style.input}
                        placeholder='Search Food'
                    />

                </View>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    headermain: {
        width: '100%',
        backgroundColor: '#F5F5ED',
        padding: 12,
        backfaceVisibility: 'hidden',
        borderBottomLeftRadius: 70
    },
    profileimgcon: {
        backgroundColor: 'white',
        marginHorizontal: 10,
        padding: 5,
        borderRadius: 20
    },
    headuser: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    nametxt: {
        color: 'black',
        fontWeight: '500',
        fontSize: 20
    },
    searchcon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
    },
    serachbox: {
        width: '80%',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 28,
        padding: 4
    },
    input: {
        width: '50%',
        color: 'black'
    }

})
export default Header2