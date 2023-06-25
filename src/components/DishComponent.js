import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { ThemeColors } from "../theme";
import { FontAwesome5 } from "@expo/vector-icons";

export default function DishComponent({ item }) {
  return (
    <View className="flex-row item-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
      <Image
        className="rounded-3xl"
        style={{ height: 100, width: 100 }}
        source={item.image}
      />
      <View className="flex flex-1 space-y-3">
        <View className="pl-3">
          <Text className="text-xl">{item.name}</Text>
          <Text className="text-gray-600">{item.description}</Text>
        </View>
        <View className="flex-row justify-between pl-3 item-center">
          <Text className="text-grey-600 text-xs">$ {item.price}</Text>
          {/* add to cart button */}
          <View className="flex-row item-center">
            <TouchableOpacity
              className="p-1 rounded-full item-center"
              style={{ backgroundColor: ThemeColors.bgColor(1) }}
            >
              <FontAwesome5 name="minus" size={12} style={{height: 20, width: 20, left: 4, top: 4}} color="white" />
            </TouchableOpacity>
            <Text className="px-3 mt-1.5">{2}</Text>
            <TouchableOpacity
              className="p-1 rounded-full item-center"
              style={{ backgroundColor: ThemeColors.bgColor(1) }}
            >
              <FontAwesome5 name="minus" size={12} style={{height: 20, width: 20, left: 4, top: 4}} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
