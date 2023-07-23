import { cloudinarImgUrl } from "../config";
import { UserContext } from "../utils/UserContext";
import { useContext } from "react";
export default function RestaurantCard({ restaurant }) {
	const { user } = useContext(UserContext);
	return (
		<div>
			<img
				src={cloudinarImgUrl + restaurant.cloudinaryImageId}
				alt="FoodImage"
			/>
			<h3>{restaurant.name}</h3>
			<h5>{restaurant.cuisines.join(", ")}</h5>
			<span>{restaurant.totalRatingsString}</span>
			<h3>{user.name}</h3>
		</div>
	);
}
