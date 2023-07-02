import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slice/cartSlice'
import restaurantSlice from './slice/restaurantSlice'

const store = configureStore({
    reducer: {
        cart: cartSlice,
        resturant: restaurantSlice
    }
})
export default store;