// Import configureStore from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

// Import the cart reducer (manages cart slice)
import cartReducer from './CartSlice';

// Create a Redux store using configureStore from Redux Toolkit
const store = configureStore({
  // Define the root reducer object
  reducer: {
    // 'cart' is the name of the slice in the store, and it's managed by cartReducer
    cart: cartReducer,
  },
});

// Export the store for use throughout the app (e.g., in <Provider store={store}>)
export default store;
