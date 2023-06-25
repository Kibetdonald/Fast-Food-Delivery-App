import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { featured } from "../assets/data";
import { ThemeColors } from "../theme";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons';

export default function CartScreen() {
  const navigation = useNavigation();
  // dummy data
  const restaurant = featured.restaurants[0];

  return (
    <View className="bg-white flex-1 mt-10">
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: ThemeColors.bgColor(1) }}
          className="absolute z-10 rounded-full shadow top-5 left-2 p-2"
        >
          <AntDesign name="arrowleft" size={18} color="white" />
        </TouchableOpacity>
        <View>
          <Text className="text-center font-bold text-xl">Your Cart</Text>
          <Text className="text-center text-gray-500">{restaurant.name}</Text>
        </View>
      </View>
      <View
        style={{ backgroundColor: ThemeColors.bgColor(0.2) }}
        className="flex-row px-4 items-center"
      >
        <Image
          source={require("../assets/delivery.png")}
          className="w-20 h-20 rounded-full"
        />
        <Text className="flex-1 pl-4">Delivery in 20-30 Minutes</Text>
        <TouchableOpacity>
            <Text className="font-bold" style={{color: ThemeColors.text}}>
                Change
            </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 50
      }}
      className="bg-white pt-5"
      >
        {
            restaurant.dishes.map((dish, index) =>{
                return(
                    <View key={index}
                    className="flex-row items-center space-x-3 py-2 px-4 pb-white rounded-3xl mx-2 mb-3 shadow-md">
                        <Text className="text-bold" style={{color: ThemeColors.text}}>2</Text>
                        <Image className="h-15 w-15 rounded-full" source={dish.image}/>
                        <Text className="flex-1 font-bold text-gray-700">{dish.name}</Text>
                        <Text className="font-semibold text-base">${dish.price}</Text>
                        <TouchableOpacity className="p-1 rounded-full"
                            style={{backgroundColor: ThemeColors.bgColor(1)}}
                        >
                            <Entypo name="minus" size={24} color="white" />                      

                        </TouchableOpacity>
                    </View>
            )
              
            })
        }
      </ScrollView>
      <View className="p-6 px-8 rounded-t-3xl space-y-4" style={{backgroundColor: ThemeColors.bgColor(0.2)}}>
        <View className="flex-row justify-between item-center">
            <Text className="text-grey-700">Subtotal</Text>
            <Text className="text-grey-700">$48</Text>
        </View>
        <View className="flex-row justify-between item-center">
            <Text className="text-grey-700">Delivery fee</Text>
            <Text className="text-grey-700">$12</Text>
        </View>
        <View className="flex-row justify-between item-center">
            <Text className="text-grey-700 font-bold">Order Total</Text>
            <Text className="text-grey-700 font-bold">$60</Text>
        </View>
        <View>
            <TouchableOpacity onPress={()=>navigation.navigate('Order')} style={{backgroundColor: ThemeColors.bgColor(1)}} className="p-3 rounded-full">
                <Text className="text-white text-center font-bold text-lg">Place Order</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
