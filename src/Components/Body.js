import RestaurantCard from "./RestaurantCard";
import { URL, cards, cards2 } from "../config";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function searchList(value, restaurantList) {
	if (value === "") {
		return restaurantList;
	}
	return restaurantList.filter((restaurant) =>
		restaurant.data.name.toLowerCase().includes(value.toLowerCase())
	);
}

export default function Body() {
	const [search, setSearch] = useState("");
	const [click, setClick] = useState(false);
	const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
	const [oldList, setOldList] = useState([]);

	useEffect(() => getRestaurants(), []);
	useEffect(() => setFilteredRestaurantList(oldList), [search]);

	async function getRestaurants() {
		try {
			const response = await fetch(URL);
			const data = await response.json();
			setOldList(data?.data?.cards[2]?.data?.data?.cards);
			setFilteredRestaurantList(data?.data?.cards[2]?.data?.data?.cards);
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<div className="container">
			<div className="search-input">
				<input
					type="text"
					name=""
					id=""
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<button
					type="submit"
					onClick={() => {
						setClick(!click);
						const data = searchList(search, oldList);
						setFilteredRestaurantList(data);
					}}
				>
					Submit-{click ? "True" : "False"}
				</button>
			</div>
			{filteredRestaurantList.length === 0 ? (
				<Shimmer />
			) : (
				<div className="flex-list">
					{filteredRestaurantList.map((restaurant) => (
						<Link
							className="card"
							to={"restaurant/" + restaurant.data.id}
							key={restaurant.data.id}
						>
							<RestaurantCard restaurant={restaurant.data} />
						</Link>
					))}
				</div>
			)}
		</div>
	);

	/* 
	Body
            Search
			Restaurant Cards
	*/
}
