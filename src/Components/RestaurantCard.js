import { cloudinarImgUrl } from "../config";
export default function RestaurantCard({ restaurant }) {
	return (
		<div>
			<img
				src={cloudinarImgUrl + restaurant.cloudinaryImageId}
				alt="FoodImage"
			/>
			<h3>{restaurant.name}</h3>
			<h5>{restaurant.cuisines.join(", ")}</h5>
			<span>{restaurant.totalRatingsString}</span>
		</div>
	);
}
