import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import RestaurantScreen from './src/screens/RestaurantScreen';
import CartScreen from './src/screens/CartScreen';
import OrderFinalize from './src/screens/OrderFinalize';
import DeliveryScreen from './src/screens/DeliveryScreen';

const Stack = createNativeStackNavigator();

function Navigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={
           {
            headerShown: false
           }
        }>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen name="Cart" options={{presentation: 'modal'}} component={CartScreen} />
          <Stack.Screen name="Order" options={{presentation: 'fullScreenModal'}} component={OrderFinalize} />
          <Stack.Screen name="Delivery" options={{presentation: 'fullScreenModal'}} component={DeliveryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Navigation;