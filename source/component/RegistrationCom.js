import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useDispatch ,useSelector} from 'react-redux'
import { getregister } from '../redux/registraionSlice'

const RegistrationCom = () => {
    const dispatch = useDispatch()
    const rolemine = useSelector((state)=>{return state.register})

  
    const [showdropdown, setshowdropdown] = useState(false)
    const [role, setrole] = useState('')
    const [registerform, setregisterform] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        role: '',
        age: '',
        address: '',
        city: '',
        country: '',
        phoneno: '',
        active: true,
        userType: 'Consumer'
    })
    const [type, settype] = useState([
        {
            id: 1,
            name: 'Consumer'
        },
        {
            id: 2,
            name: 'Business'
        }
    ])

    const register = async()=>{
        let newform = {
            name:registerform.name,
            username:registerform.username,
            email:registerform.email,
            password:registerform.password,
            role:role,
            age:registerform.age,
            address:registerform.address,
            city:registerform.city,
            country:registerform.country,
            phoneNo:registerform.phoneno,
            active:registerform.active,
            userType:registerform.userType
        }
        dispatch(getregister.actions.setregister({newform}))
        // await fetch('http://192.168.0.105:8080/user',{
        //     method:'POST',
        //     body:JSON.stringify(newform),
        //     headers:{
        //         'Content-Type':'application/json'
        //     }
        // }).then((resp)=>{
        //     return resp.json()
        // }).then((data)=>{
        //     console.log(data)
        // })
        
    }
    return (
     
            <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>

                <View>
                    <Image source={{ uri: 'https://www.shutterstock.com/image-vector/food-logo-smile-label-company-260nw-1271590297.jpg' }} style={style.img} />
                </View>
                <View style={style.inputbox}>
                    <TextInput
                        value={registerform.name}
                        placeholder='Enter Your Name'
                        style={style.inp}
                        onChangeText={(e) => {
                            setregisterform({
                                ...registerform,
                                name: e
                            })
                        }}
                    />
                </View>
                <View style={style.inputbox}>
                    <TextInput
                        value={registerform.username}
                        placeholder='Enter Your Username'
                        style={style.inp}
                        onChangeText={(e) => {
                            setregisterform({
                                ...registerform,
                                username: e
                            })
                        }}
                    />
                </View>
                <View style={style.inputbox}>
                    <TextInput
                        value={registerform.email}
                        placeholder='Enter Your Email'
                        style={style.inp}
                        onChangeText={(e) => {
                            setregisterform({
                                ...registerform,
                                email: e
                            })
                        }}
                    />
                </View>
                <View style={style.inputbox}>
                    <TextInput
                        value={registerform.password}
                        placeholder='Enter Your Password'
                        style={style.inp}
                        onChangeText={(e) => {
                            setregisterform({
                                ...registerform,
                                password: e
                            })
                        }}
                    />
                </View>
                <View>
                    <View style={[style.inputbox, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}>
                        <TextInput
                            value={role}
                            editable={false}
                            placeholder='Select Role'
                            style={[style.inp]}

                        />
                        <TouchableOpacity
                            onPress={() => {
                                setshowdropdown(!showdropdown)
                            }}
                        >
                            <MaterialCommunityIcons
                                name='chevron-down'
                                color="black"
                                size={24}
                            />
                        </TouchableOpacity>
                    </View>
                    {
                        showdropdown &&
                        <View style={style.boxtype}>
                            {
                                type.map((item, i) => (
                                    <TouchableOpacity
                                        onPress={() => {
                                            setrole(item.name)
                                        }}
                                        style={style.typebtn}
                                        key={i}>
                                        <Text>{item.name}</Text>
                                    </TouchableOpacity>
                                ))

                            }
                        </View>
                    }
                    {/* <View style={style.inputbox}>
                        <TextInput
                            value={registerform.age}
                            placeholder='Enter Your Age'
                            style={style.inp}
                            onChangeText={(e) => {
                                setregisterform({
                                    ...registerform,
                                    age: e
                                })
                            }}
                        />
                    </View>
                    <View style={style.inputbox}>
                        <TextInput
                            value={registerform.address}
                            placeholder='Enter Your Address'
                            style={style.inp}
                            onChangeText={(e) => {
                                setregisterform({
                                    ...registerform,
                                    address: e
                                })
                            }}
                        />
                    </View>
                    <View style={style.inputbox}>
                        <TextInput
                            value={registerform.city}
                            placeholder='Enter Your City'
                            style={style.inp}
                            onChangeText={(e) => {
                                setregisterform({
                                    ...registerform,
                                    city: e
                                })
                            }}
                        />
                    </View>
                    <View style={style.inputbox}>
                        <TextInput
                            value={registerform.country}
                            placeholder='Enter Your Country'
                            style={style.inp}
                            onChangeText={(e)=>{
                                setregisterform({
                                    ...registerform,
                                    country:e
                                })
                            }}
                        />
                    </View>
                    <View style={style.inputbox}>
                        <TextInput
                            value={registerform.phoneno}
                            maxLength={10}
                            keyboardType='numeric'
                            placeholder='Enter Your Phone No'
                            style={style.inp}
                            onChangeText={(e)=>{
                                setregisterform({
                                    ...registerform,
                                    phoneno:e
                                })
                            }}
                        />
                    </View> */}
                </View>
                <TouchableOpacity 
                onPress={()=>register()}
                style={style.registerbtn}>
                    <Text style={style.registertxt}>Register</Text>
                </TouchableOpacity>
            </View>
     
    )
}
const style = StyleSheet.create({
    img: {
        width: 200,
        height: 100
    },
    inp: {
        width: 200,
        padding: 10
    },
    inputbox: {
        marginVertical: 8,
        borderRadius: 10,
        width: 300,
        backgroundColor: 'white',
        elevation:2
    },
    boxtype: {
        width: 300,
        backgroundColor: 'white',
        position: 'absolute',
        top: 50,
        zIndex: 999
    },
    typebtn: {
        padding: 3
    },
    registerbtn: {
        width: 300,
        borderRadius: 50,
        backgroundColor: 'orange',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginVertical: 10
    },
    registertxt: {
        color: 'white',
        fontSize: 20
    }
})
export default RegistrationCom