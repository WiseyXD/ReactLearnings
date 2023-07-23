import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: { items: [] },
	reducers: {
		addItem: (state, action) => {
			state.items.push(action.payload);
		},
		removeLastItem: (state) => {
			state.items.pop();
		},
		clearCart: (state) => {
			state.items = [];
		},
		removeItem: (state, action) => {
			state.items.splice(action.payload, 1);
		},
	},
});

export default cartSlice.reducer;
export const { addItem, removeItem, removeLastItem, clearCart } =
	cartSlice.actions;
