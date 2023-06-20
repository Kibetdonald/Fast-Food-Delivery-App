import { View, Text, SafeAreaView, TextInput } from "react-native";
import React from "react";
import GlobalStyles from "../../GlobalStyles";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea} className="bg-white">
      <StatusBar barStyle="dark-content" />
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <AntDesign name="search1" size={24} color="black" />
          <TextInput placeholder="Restaurants" className="ml-2 flex-1 text-red" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 p-l-2 border-gray-300">
          <Ionicons name="location-outline" size={24} color="black" />
          </View>
        </View>
        
      </View>
    </SafeAreaView>
  );
}
