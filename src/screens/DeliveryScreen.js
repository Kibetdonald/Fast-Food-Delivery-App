import { View, Dimensions } from "react-native";
import React from "react";
import { featured } from "../assets/data";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import { ThemeColors } from "../theme";
import { Colors } from "react-native/Libraries/NewAppScreen";

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
          pinColor={Colors.orange}
        />
      </MapView>
    </View>
  );
}
