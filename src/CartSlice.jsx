import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // ➕ Add an item to the cart
    addItem: (state, action) => {
      const { name, image, cost } = action.payload; // Extract product details
      // Check if item already exists
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++; // If already exists, increase its quantity
      } else {
        // If not, add new item with quantity 1
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },

    // ➖ Remove an item from the cart
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },

    // 🔁 Update quantity of an existing item
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; // Extract item name and new quantity
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity; // Update to new quantity
      }
    },
  },
});

// ✅ Export the actions to use in your components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// ✅ Export the reducer to use in store.js
export default CartSlice.reducer;
