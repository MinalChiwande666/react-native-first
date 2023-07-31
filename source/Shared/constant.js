import AsyncStorage from "@react-native-async-storage/async-storage";

export const getactiveuser = async()=>{
    let active = JSON.parse(await AsyncStorage.getItem('user'))
    console.log("active => ",active)
}