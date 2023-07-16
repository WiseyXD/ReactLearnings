export const searchList = (value, restaurantList) => {
	if (value === "") {
		return restaurantList;
	}
	return restaurantList.filter((restaurant) =>
		restaurant.data.name.toLowerCase().includes(value.toLowerCase())
	);
};
