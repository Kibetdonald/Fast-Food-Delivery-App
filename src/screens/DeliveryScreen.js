import { View, Dimensions, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { featured } from "../assets/data";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import { ThemeColors } from "../theme";
import { Feather, MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;

export default function DeliveryScreen() {
  const restaurant = featured.restaurants[0];
  const navigation = useNavigation();
  return (
    <View className="flex-1">
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02 * ASPECT_RATIO,
        }}
        className="flex-1"
        mapType="standard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.lng,
          }}
          title={restaurant.name}
          description={restaurant.description}
          pinColor={ThemeColors.bgColor(1)}
        />
      </MapView>
      <View className="rounded-t-3xl -mt-12 bg-white relative">
        <View className="flex-row justify-between px-5 pt-10">
          <View>
            <Text className="font-grey-700 text-lg font-semibold">
              Estimated Arrival Time:
            </Text>
            <Text className="text-3xl font-extrabold text-gray-700">
              20-30 Minutes
            </Text>
            <Text className="mt-2 text-gray-700 font-semibold">
              Order on transit
            </Text>
          </View>
          <Image
            className="h-24 w-24"
            source={require("../assets/bikeGuy2.gif")}
          />
        </View>
        <View
          className="p-2 flex-row justify-between item-center rounded-full my-5 mx-2"
          style={{ backgroundColor: ThemeColors.bgColor(1) }}
        >
          <View
            className="p-1 rounded-full"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
          >
            <Image
              className="h-16 w-16 rounded-full"
              source={require("../assets/deliveryPerson.jpg")}
            />
          </View>
          <View className="flex-1 ml-3 mt-4">
            <Text className="text-lg font-bold text-white">John</Text>
            <Text className="text-grey-800 text-s">Rider</Text>
          </View>
          <View className="flex-row items-center space-x-3 mr-3">
            <TouchableOpacity className="bg-white p-2 rounded-full">
              <Feather name="phone" size={18} color="orange" />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Home')} className="bg-white p-2 rounded-full">
            <MaterialIcons name="cancel" size={18} color="red" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
