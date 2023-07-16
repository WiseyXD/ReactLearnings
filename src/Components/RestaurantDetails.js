import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cloudinarImgUrl } from "../config";
import Shimmer from "./Shimmer";

export default function RestaurantDetails() {
	const { id } = useParams();
	const [restaurant, setRestaurant] = useState({});
	const [menu, setMenu] = useState([]);
	async function getRestaurantInfo() {
		const resp = await fetch(
			`https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=${id}`
		);
		const data = await resp.json();
		setRestaurant(data?.data?.cards[0]?.card?.card?.info);
		setMenu(
			data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
				?.card?.card?.itemCards
		);
	}

	useEffect(() => {
		getRestaurantInfo();
	}, []);

	return restaurant === null ? (
		<Shimmer />
	) : (
		<div className="container">
			<div className="card">
				<img
					src={cloudinarImgUrl + restaurant.cloudinaryImageId}
					alt=""
				/>
				<h1>{restaurant.name}</h1>
				<h3>{restaurant.avgRating} Stars</h3>
				<h3>{restaurant.costForTwoMessage}</h3>
				<h3>{restaurant.cuisines}</h3>
				<h5>Restaurant ID : {id}</h5>
			</div>
			{menu === undefined ? (
				<h1>Menu Not Available</h1>
			) : (
				<div className="menuList">
					<h3>Recommended</h3>
					{menu.map((ele) => (
						<li key={ele.card.info.id}>{ele.card.info.name}</li>
					))}
				</div>
			)}
		</div>
	);
}
