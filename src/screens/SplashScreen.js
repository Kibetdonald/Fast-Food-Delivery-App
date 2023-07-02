import { View, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native-stack";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      // Navigate to the next screen after the splash screen
      navigation.replace("Home");
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../assets/loading.json")}
        autoPlay
        loop={true}
        // resizeMode="cover"
        // onAnimationFinish={}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    margin: 0,
  },
});
