import { View, Text, Dimensions, Image, FlatList, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { LineChart, PieChart } from 'react-native-chart-kit'
const Businesscom = () => {
  const screenWidth = Dimensions.get('window').width
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
 
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
  const data = [
    {
      name: "Seoul",
      population: 21500000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Beijing",
      population: 527612,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "New York",
      population: 8538000,
      color: "#ffffff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Moscow",
      population: 11920000,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
  ];
  const [getstat, setstat] = useState(
    [
      {
        id: 1,
        name: 'pasta',
        stat:  5.00000,
        color: "rgba(131, 167, 234, 1)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15,
        image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg'
      },
      {
        id: 1,
        name: 'pizza',
        stat:  50.00000,
        color: "rgba(255, 167, 237, 3)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15,
        image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg'
      },
      {
        id: 1,
        name: 'pizza',
        stat:  50.00000,
        color: "#F00",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15,
        image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg'
      },
      {
        id: 1,
        name: 'pizza',
        stat:  50.00000,
        color: "#ffffff",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15,
        image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg'
      },
      {
        id: 1,
        name: 'pizza',
        stat: 50.00000,
        color: "rgb(0, 0, 255)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15,
        image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg'
      },

    ]
  )
  return (
    <>
      <ScrollView>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <PieChart
            data={getstat}
            width={screenWidth}
            height={250}
            chartConfig={chartConfig}
            accessor={"stat"}
            backgroundColor={"transparent"}
            paddingLeft={"15"}
            center={[10, 10]}
            bezier
            absolute
          />
          {/* <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/002/154/047/original/percentage-pie-chart-template-free-vector.jpg' }} style={{ width: '100%', height: 300 }} /> */}
          <Text style={{ color: 'black', fontWeight: 600 }}>Your Status</Text>

          <View style={{ width: '90%', }}>

            <FlatList
              data={getstat}

              renderItem={({ item, i }) => (
                <>
                  <View style={style.statbox}>
                    <Image source={{ uri: item.image }} style={{ width: 50, height: 50, borderRadius: 10 }} />
                    <View>
                      <Text>{item.name}</Text>
                    </View>
                    <View>
                      <Text>{item.stat}</Text>
                    </View>
                  </View>
                </>
              )}
            />

          </View>

        </View>
      </ScrollView>
    </>
  )
}
const style = StyleSheet.create({
  statbox: {
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    marginVertical: 10
  }
})
export default Businesscom