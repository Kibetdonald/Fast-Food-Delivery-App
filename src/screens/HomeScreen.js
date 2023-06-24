import { View, Text, SafeAreaView, TextInput, ScrollView } from "react-native";
import React from "react";
import GlobalStyles from "../../GlobalStyles";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { ThemeColors } from "../theme";
import CategoriesComponents from "../components/CategoriesComponents";
import FeaturesComponent from "../components/FeaturesComponent";
import { featured } from "../assets/data";

export default function HomeScreen() {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea} className="bg-white">
      <StatusBar barStyle="dark-content" />
      {/* Search Bar */}
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <AntDesign name="search1" size={24} color="grey" />
          <TextInput placeholder="Restaurants" className="ml-2 flex-1 text-red" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 p-l-2 border-gray-300">
          <Ionicons name="location-outline" size={24} color="grey" />
          <Text className="text-gray-600">Nairobi, Kenya</Text>
          </View>
        </View>
        {/* Sliders */}
        <View className="p-3 rounded-full" style={{backgroundColor: ThemeColors.bgColor(1)}}>
        <Feather name="sliders" size={24} color="white" />
        </View>
      </View>
        {/* Categories */}
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 20}}>
          <CategoriesComponents/>
        </ScrollView>
        {/* Features */}
       
        <View className="mt-5">
        {
            [
              featured, featured, featured
            ].map((item, index)=>{
              return (
                <FeaturesComponent
                    key={index}
                    title={item.title}
                    restaurants = {item.restaurants}
                    description = {item.description}
                />
              )
            })
        }
        </View>
    </SafeAreaView>
  );
}
