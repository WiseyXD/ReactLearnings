export const searchList = (value, restaurantList) => {
	if (value === "") {
		return restaurantList;
	}
	return restaurantList.filter((restaurant) =>
		restaurant.info.name.toLowerCase().includes(value.toLowerCase())
	);
};
