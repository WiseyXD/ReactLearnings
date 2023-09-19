import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL, cloudinarImgUrl } from "../config";
import Shimmer from "./Shimmer";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { AiFillStar } from "react-icons/ai";

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
		<div className="max-w-7xl w-1/2 mx-auto my-0 flex flex-col justify-center items-center">
			<div className="">
				<img
					src={cloudinarImgUrl + restaurant.cloudinaryImageId}
					alt=""
				/>
				<div className="">
					<div className="flex justify-between item">
						<h1 className="text-2xl font-semibold ">
							{restaurant.name}
						</h1>
						<div className="flex justify-center items-center text-lg gap-1">
							{restaurant.avgRating} <AiFillStar />
						</div>
					</div>
					<h3 className="text-lg">{restaurant.costForTwoMessage}</h3>
					<h3 className="text-lg">{restaurant.cuisines}</h3>
					{/* <h5>Restaurant ID : {id}</h5> */}
				</div>
			</div>
			{menu === undefined ? (
				<h1>Menu Not Available</h1>
			) : (
				<div className="w-3/4">
					<h3 className="font-medium text-xl">
						Recommended - {menu.length} items
					</h3>
					{menu.map((ele) => (
						<li
							key={ele.card.info.id}
							className="w-full list-none flex justify-between py-2 my-2 bg-gray-200 px-2 rounded-md"
						>
							<h3 className="text-lg font-normal">
								{ele.card.info.name}{" "}
							</h3>
							<button
								className="bg-green-400 text-gray-100 px-2 py-1 rounded-md hover:shadow-lg duration-200 ease-in-out"
								onClick={() => handleAddItem(ele)}
							>
								Add Item
							</button>
						</li>
					))}
				</div>
			)}
		</div>
	);
}
