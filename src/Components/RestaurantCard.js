import { cloudinarImgUrl } from "../config";
import { UserContext } from "../utils/UserContext";
import { useContext } from "react";
export default function RestaurantCard({ restaurant }) {
	const { user } = useContext(UserContext);
	//Jai Shre
	return (
		<div className="md:h-96 rounded-lg border border-gray-300 p-2 shadow-xl shadow-slate-200 hover:scale-110 duration-300">
			<img
				src={cloudinarImgUrl + restaurant.cloudinaryImageId}
				alt="FoodImage"
				className="w-full rounded-lg duration-200"
			/>
			<h3 className="text-xl font-semibold">{restaurant.name}</h3>
			<h5 className="text-lg">{restaurant.cuisines.join(", ")}</h5>
			<span className="text-lg">
				{restaurant.totalRatingsString} Ratings
			</span>
			<h3 className="text-lg">{user.name}</h3>
		</div>
	);
}
