import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { ThemeColors } from "../theme";
import DishComponent from "../components/DishComponent";
import CartButton from "../components/CartButton";

export default function RestaurantScreen() {
  const { params } = useRoute();
  const navigation = useNavigation();
  let data = params;
  return (
    <View>
       <CartButton/>
      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72" source={data.image} />
          <TouchableOpacity
            className="absolute top-14 left-4 p-2 rounded-full shadow"
            style={{ backgroundColor: "white" }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons
              name="arrow-back"
              size={24}
              color={ThemeColors.bgColor(1.5)}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-white -mt-12 pt-6"
        >
          <View className="px-5">
            <Text className="text-3xl font-bold">{data.name}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row item-center space-x-1">
                <Image
                  source={require("../assets/fullStar.png")}
                  className="h-4 w-4"
                />
                <Text className="text-xs">
                  <Text className="text-gray-700 px-5">
                    ({data.reviews} review) ·{" "}
                    <Text className="font-semibold">{data.category}</Text>{" "}
                  </Text>
                  <Text className="text-green-700">{data.stars}</Text>
                </Text>
              </View>
              <View className="flex-row item-center space-x-1">
                <EvilIcons name="location" size={24} color="black" />
                <Text className="text-gray-700 text-xs">
                  Nearby · {data.address}
                </Text>
              </View>
            </View>
            <Text className="text-grey-700 mt-2">{data.description}</Text>
          </View>
        </View>
        
     
        <View className="pb-36 bg-white">
          <Text className="px-4 py-4 text-2xl font-semibold">Menu</Text>
          {/* List of dishes */}
          {data.dishes.map((dish, index) => (
            <DishComponent item={{ ...dish }} key={index} />
          ))}
        </View>
       
      </ScrollView>
      
    </View>
  );
}
