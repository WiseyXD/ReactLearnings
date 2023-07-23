import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL, cloudinarImgUrl } from "../config";
import Shimmer from "./Shimmer";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

export default function RestaurantDetails() {
	const { id } = useParams();
	const [restaurant, setRestaurant] = useState({});
	const [menu, setMenu] = useState([]);
	async function getRestaurantInfo() {
		const resp = await fetch(MENU_URL + id);
		const data = await resp.json();
		setRestaurant(data?.data?.cards[0]?.card?.card?.info);
		setMenu(
			data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
				?.card?.card?.itemCards
		);
	}
	const dispatch = useDispatch();

	function handleAddItem(item) {
		dispatch(addItem(item));
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
						<li key={ele.card.info.id}>
							{ele.card.info.name}{" "}
							<button onClick={() => handleAddItem(ele)}>
								Add Item
							</button>
						</li>
					))}
				</div>
			)}
		</div>
	);
}
