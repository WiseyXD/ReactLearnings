import RestaurantCard from "./RestaurantCard";
import { URL, cards, cards2 } from "../config";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { searchList } from "../utils/Helper";
import useIsOnline from "../Hooks/useOnline";
import { UserContext } from "../utils/UserContext";

export default function Body() {
	const [search, setSearch] = useState("");
	const [click, setClick] = useState(false);
	const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
	const [oldList, setOldList] = useState([]);
	const isOnline = useIsOnline();
	const { user, setUser } = useContext(UserContext);
	useEffect(() => getRestaurants(), []);
	useEffect(() => setFilteredRestaurantList(oldList), [search]);

	const getRestaurants = async () => {
		try {
			const response = await fetch(URL);
			const data = await response.json();
			console.log(
				data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
					?.restaurants
			);
			setOldList(
				data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
					?.restaurants
			);

			setFilteredRestaurantList(
				data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
					?.restaurants
			);
		} catch (error) {
			console.log(error);
		}
	};

	if (!isOnline) {
		return (
			<div className="container">
				<h1>Check Internet Please</h1>
			</div>
		);
	}

	return (
		<div className="container">
			<div className="search-input">
				<div>
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

				<div className="">
					<input type="text" name="" id="" onChange={(e) => {}} />
					<button
						onClick={(e) =>
							setUser({
								name: e.target.previousSibling.value,
								email:
									e.target.previousSibling.value +
									"@gmail.com",
							})
						}
					>
						Set Username
					</button>
				</div>
			</div>
			{filteredRestaurantList.length === 0 ? (
				<Shimmer />
			) : (
				<div className="flex-list">
					{filteredRestaurantList.map((restaurant) => (
						<Link
							className="card"
							to={"restaurant/" + restaurant.info.id}
							key={restaurant.info.id}
						>
							<RestaurantCard restaurant={restaurant.info} />
						</Link>
					))}
				</div>
			)}
		</div>
	);
}
/* 
	Body
            Search
			Restaurant Cards
	*/
