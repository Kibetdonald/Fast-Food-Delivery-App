import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ThemeColors } from "../theme";
import {useNavigation} from '@react-navigation/native'

export default function CartButton() {
    const navigation = useNavigation()
  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity
      onPress={()=>navigation.navigate('Cart')}
        className="flex-row justify-between item-center mx-5 rounded-full p-4 py-3 shadow-lg"
        style={{ backgroundColor: ThemeColors.bgColor(1) }}
      >
        <View
          className="p-2 px-4 rounded-full"
          style={{ backgroundColor: "rgba(255, 255,255,255)" }}
        >
          <Text className="font-bold text-lg">3</Text>
        </View>
        <Text className="flex-1 text-center font-extrabold text-white text-lg mt-2">
          View Cart
        </Text>
        <Text className="font-extrabold text-white text-lg mt-2">${12}</Text>
      </TouchableOpacity>
    </View>
  );
}
