import { View, Text, TextInput } from 'react-native'
import React from 'react'

const Search = () => {
  return (
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',padding:10}}>
      <TextInput
      placeholder='Search Here Your Food'
      style={{backgroundColor:'lightgray',width:290,padding:5}}
      />
      <Text>Search</Text>
    </View>
  )
}

export default Search