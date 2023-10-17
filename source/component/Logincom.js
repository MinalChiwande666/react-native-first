import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useDispatch } from 'react-redux'
import { otpget } from '../redux/otp'
import AsyncStorage from '@react-native-async-storage/async-storage'
const Logincom = ({ navigation }) => {
  const [dropdown, setdropdown] = useState(false)
  const [selectcountry, setselectcountry] = useState({})
  const dispatch = useDispatch()
  const [userlists,setuserslist] = useState([])
  const [phoneno, setphoneno] = useState({
    username:'',
    password:''
  })
  const [errno, seterrno] = useState(false)
  const [countrycodeno, setcountrycodeno] = useState(
    [
      {
        id: 1,
        name: 'India',
        image: 'https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg',
        code: '+91'
      },
      {
        id: 1,
        name: 'Japan',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/800px-Flag_of_Japan.svg.png',
        code: '+81'
      },
      {
        id: 3,
        name: 'America',
        image: 'https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg',
        code: '+1'
      }
    ]
  )
  const getuser = async()=>{
    let userlist = await fetch('http://192.168.0.123:8080/userList');
    let users = await userlist.json()
    console.log(users)
    setuserslist(users)
  

  }
  useEffect(()=>{
  
    getuser()
  },[])
  const getusersave = async(username)=>{
    if(username)
    {
      // await AsyncStorage.setItem('user',JSON.stringify(username))
      // dispatch(otpget.actions.setotpverify(username))
    // userlists.filter((usern)=>{
    //   if(usern.username === username)
    //   {
    //     console.log(usern)
    //     dispatch(otpget.actions.setotpverify(usern))
    //     alert("succefully login!!!")
    //     navigation.navigate('App')
    //   }
    //  })
    dispatch(otpget.actions.setotpverify(username))
      navigation.navigate('App')
    }
    
  }

  const verifyphone = () => {
    // console.log("userlists => ",userlists)
    // let ct = 0;
    // if(phoneno.username === '')
    // {
    //   alert("please enter your username")
    //   ct++
    // }
    // if(phoneno.password === '')
    // {
    //   alert("please enter your password")
    //   ct++
    // }
    // if(ct===0)
    // {
    //   let newform = {
    //     username:phoneno.username,
    //     password:phoneno.password
    //   }
    //   await fetch('http://192.168.0.105:8080/login_action',{
    //     method:'POST',
    //     body:JSON.stringify(newform),
    //     headers:{
    //       'Content-Type':'application/json'
    //     }
        
    //   }).then((data)=>{
    //     return data.json()
    //   }).then(async(res)=>{
        
    //   })
     getusersave(phoneno.username)
    // if (phoneno.number.length !== 10) {
    //   seterrno(true)
    // }
    // else {
    //   seterrno(false)
    //   navigation.navigate('Otp', {
    //     phonenp: phoneno.number
    //   })
    // }
  }
  
  useEffect(() => {
    console.log("country details =>", selectcountry)
    console.log("phoneno => ", phoneno)
  }, [selectcountry])
  return (
    <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
      <View>
        <Image source={{ uri: 'https://www.shutterstock.com/image-vector/food-logo-smile-label-company-260nw-1271590297.jpg' }} style={style.img} />
      </View>
      <View style={style.inputphonecon}>

        <View style={style.inp}>


          <TextInput
            value={phoneno?.username}
            onChangeText={(e) => {
             
                setphoneno({
                  ...phoneno,
                  username: e
              
              })
            }}
            placeholder='Enter Your Username'
          
            style={style.inputbox}
          />
        </View>
        <View style={style.inp}>


          <TextInput
            value={phoneno?.password}
            onChangeText={(e) => {
             
                setphoneno({
                  ...phoneno,
                  password: e
                })
           
            }}
            placeholder='Enter Your Password'
           
            style={style.inputbox}
          />
        </View>



      </View>
      <TouchableOpacity
        onPress={() => verifyphone()}
        style={style.verifynobtn}>
        <Text style={style.btntext}>Verify Phone Number</Text>
      </TouchableOpacity>
      <View style={style.registercon}>
        <Text style={style.txt}>Don't Have an Account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('register')
          }}
        >
          <Text style={style.txt2}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const style = StyleSheet.create({
  img: {
    width: 200,
    height: 100
  },
  inp: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    backgroundColor: 'white',
    elevation: 2,
    borderRadius: 10,
    marginTop: 10
  },
  inputbox: {
    width: 210,
    marginHorizontal: 10
  },
  inputphonecon: {
    height: 80,

  },
  flagimg: {
    width: 20,
    height: 20
  },
  flagbtncon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  nodrodown: {
    width: 70,
    backgroundColor: 'white',
    position: 'absolute',
    top: 50,
    borderRadius: 10,
    elevation: 4,
    zIndex: 999
  },
  dropselect: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,

  },
  verifynobtn: {
    backgroundColor: 'orange',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50,
    padding: 10,
    borderRadius: 50,
    width: 300,

  },
  btntext: {
    color: 'white',
    fontSize: 15
  },
  err: {
    color: 'red',
    fontSize: 13
  },
  registercon: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  txt: {
    color: 'black'
  },
  txt2: {
    color: 'orange'
  }
})
export default Logincom