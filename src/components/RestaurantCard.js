import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { EvilIcons } from '@expo/vector-icons';
import { ThemeColors } from "../theme";
import {useNavigation} from "@react-navigation/native";

export default function RestaurantCard({ item }) {
  const navigation = useNavigation()
  return (
    <TouchableWithoutFeedback onPress={()=>{navigation.navigate('Restaurant', {...item})}}>
      <View className="mr-6 bg-white rounded-3xl shadow-lg" style={{shadowColor: ThemeColors.bgColor(0.2), shadowRadius: 7}}>
        <Image className="h-36 w-64 rounded-t-3xl" source={item.image} />
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2">{item.name}</Text>
          <View className="flex-row item-center space-x-1">
            <Image source={require("../assets/fullStar.png")} className="h-4 w-4"/>
            <Text className="text-xs">
              <Text className="text-gray-700 px-5">({item.reviews} review) · <Text className="font-semibold">{item.category}</Text> </Text>
              <Text className="text-green-700">{item.stars}</Text>
            </Text>
          </View>
          <View className="flex-row item-center space-x-1">
          <EvilIcons name="location" size={24} color="black" />
          <Text className="text-gray-700 text-xs">Nearby · {item.address}</Text>

          </View>

        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
