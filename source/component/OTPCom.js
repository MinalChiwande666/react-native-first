import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { otpget } from '../redux/otp'
const OTPCom = ({navigation,phoneno}) => {
    const dispatch = useDispatch()
  
    const inp1 = useRef();
    const inp2 = useRef();
    const inp3 = useRef();
    const inp4 = useRef();
    const inp5 = useRef();
    const inp6 = useRef();
    const [focusedinp, setfocusedinp] = useState(false)
    const [otpinp, setotpinp] = useState({
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: ''
    })
    const inputKeypress = (e, prev, next, inputname) => {
        if (e.nativeEvent.key === 'Backspace') {
            if (prev !== '') {
                prev.current.focus()
                if (inputname === 'inputfeild1') {
                    
                    return setfocusedinp(false)
                }
                if (inputname === 'inputfeild2') {
                    
                    
                }
                if (inputname === 'inputfeild3') {
                    
                    return setfocusedinp(false)
                }
                if (inputname === 'inputfeild4') {
                  
                    return setfocusedinp(false)
                }
                if (inputname === 'inputfeild5') {
                   
                    return setfocusedinp(false)
                }
                if (inputname === 'inputfeild6') {
                    
                    return setfocusedinp(false)
                }
            }
        } else if (e.nativeEvent.key === '-' || e.nativeEvent.key === '.') {
        } else {
            if (next !== '' && e.nativeEvent.key != '') {
                next.current.focus()
                if (inputname === 'inputfeild1') {

                    return setfocusedinp(true)
                }
                if (inputname === 'inputfeild2') {

                    return setfocusedinp(true)
                }
                if (inputname === 'inputfeild3') {

                    setfocusedinp(true)
                }
                if (inputname === 'inputfeild4') {

                    return setfocusedinp(true)
                }
                if (inputname === 'inputfeild5') {

                    return setfocusedinp(true)
                }
                if (inputname === 'inputfeild6') {

                   return setfocusedinp(true)
                }

            }
        }
    }
  const verifyotp = ()=>{
    let countotp = otpinp.input1 + otpinp.input2 + otpinp.input3 + otpinp.input4 + otpinp.input5 + otpinp.input6;
    if(countotp.length === 6)
    {
        dispatch(otpget.actions.setotpverify(countotp))
        navigation.navigate('App')
    }
    else
    {
        alert("please enter proper otp")
    }
  }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
            <View>
                <Text style={style.maintxt}>Verify Your Number By Otp</Text>
            </View>
            <View style={style.otpcon}>
                <TextInput
                    maxLength={1}
                    ref={inp1}
                    value={otpinp.input1}

                    returnKeyType='next'
                    keyboardType='numeric'
                    autoComplete="sms-otp"
                    style={[style.otpinp, { borderBottomColor: focusedinp ? 'orange' : 'gray' }]}
                    onKeyPress={$event => {
                        inputKeypress($event, '', inp2, 'inputfeild1')
                    }}
                    onChangeText={(e) => {
                        setotpinp({
                            ...otpinp,
                            input1: e != '.' && e != '-' ? e : ''
                        })
                    }}
                    textContentType="oneTimeCode"
                />
                <TextInput
                    maxLength={1}
                    value={otpinp.input2}

                    ref={inp2}
                    returnKeyType='next'
                    keyboardType='numeric'
                    autoComplete="sms-otp"
                    textContentType="oneTimeCode"
                    style={[style.otpinp, { borderBottomColor: focusedinp ? 'orange' : 'gray' }]}
                    onKeyPress={$event => {
                        inputKeypress($event, inp1, inp3, 'inputfeild2')
                    }}
                    onChangeText={(e) => {
                        setotpinp({
                            ...otpinp,
                            input2: e != '.' && e != '-' ? e : ''
                        })
                    }}
                />
                <TextInput
                    maxLength={1}
                    value={otpinp.input3}

                    ref={inp3}
                    returnKeyType='next'
                    keyboardType='numeric'
                    autoComplete="sms-otp"
                    textContentType="oneTimeCode"
                    style={[style.otpinp, { borderBottomColor: focusedinp ? 'orange' : 'gray' }]}
                    onKeyPress={$event => {
                        inputKeypress($event, inp2, inp4, 'inputfield3')
                    }}
                    onChangeText={(e) => {
                        setotpinp({
                            ...otpinp,
                            input3: e != '.' && e != '-' ? e : ''
                        })
                    }}
                />
                <TextInput
                    maxLength={1}
                    ref={inp4}
                    value={otpinp.input4}

                    returnKeyType='next'
                    keyboardType='numeric'
                    autoComplete="sms-otp"
                    textContentType="oneTimeCode"
                    style={[style.otpinp, { borderBottomColor: focusedinp ? 'orange' : 'gray' }]}
                    onKeyPress={$event => {
                        inputKeypress($event, inp3, inp5, 'inputfield4')
                    }}
                    onChangeText={(e) => {
                        setotpinp({
                            ...otpinp,
                            input4: e != '.' && e != '-' ? e : ''
                        })
                    }}
                />
                <TextInput
                    maxLength={1}
                    value={otpinp.input5}
                    ref={inp5}

                    returnKeyType='next'
                    keyboardType='numeric'
                    autoComplete="sms-otp"
                    textContentType="oneTimeCode"
                    style={[style.otpinp, { borderBottomColor: focusedinp ? 'orange' : 'gray' }]}
                    onKeyPress={$event => {
                        inputKeypress($event, inp4, inp6, 'inputfield5')
                    }}
                    onChangeText={(e) => {
                        setotpinp({
                            ...otpinp,
                            input5: e != '.' && e != '-' ? e : ''
                        })
                    }}
                />
                <TextInput
                    maxLength={1}
                    value={otpinp.input6}
                    ref={inp6}

                    returnKeyType='next'
                    keyboardType='numeric'
                    autoComplete="sms-otp"
                    textContentType="oneTimeCode"
                    style={[style.otpinp, { borderBottomColor: focusedinp ? 'orange' : 'gray' }]}
                    onKeyPress={$event => {
                        inputKeypress($event, inp5, inp6, 'inputfield6')
                    }}
                    onChangeText={(e) => {
                        setotpinp({
                            ...otpinp,
                            input6: e != '.' && e != '-' ? e : ''
                        })
                    }}
                />
            </View>
            <View>
                <TouchableOpacity 
                onPress={()=>verifyotp()}
                style={style.verifynobtn}>
                    <Text style={style.btntext}>Verify OTP</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    maintxt: {
        color: 'lightgray',
        fontSize: 20,
        fontWeight: '600'
    },
    otpinp: {
        width: 40,
        textAlign: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

        borderBottomWidth: 1
    },
    otpcon: {
        width: 300,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    verifynobtn: {
        backgroundColor: 'orange',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        padding: 10,
        borderRadius: 50,
        width: 300,
        zIndex: -1
    },
    btntext: {
        color: 'white',
        fontSize: 15
    },
})
export default OTPCom