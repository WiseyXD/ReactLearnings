import RestaurantCard from "./RestaurantCard";
import { URL, cards, cards2 } from "../config";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { searchList } from "../utils/Helper";
import useIsOnline from "../Hooks/useOnline";
import { UserContext } from "../utils/UserContext";
// J
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
			console.log(data);
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
		<div className="max-w-7xl w-[90%] mx-auto my-0">
			<div className="flex justify-center items-center gap-x-3">
				<div className="basis-1 flex gap-x-2">
					<input
						type="text"
						name=""
						id=""
						value={search}
						placeholder="Search Restaurant from the List..."
						onChange={(e) => setSearch(e.target.value)}
						className="border border-gray-300 px-3 py-1 rounded-lg md:w-80 lg:w-96 animate__backInUp"
					/>
					<button
						type="submit"
						className="bg-slate-200 px-2 py-1 rounded-lg md:px-4 lg:px-5 hover:bg-slate-400 ease-in-out duration-200"
						onClick={() => {
							setClick(!click);
							const data = searchList(search, oldList);
							setFilteredRestaurantList(data);
							console.log(oldList);
						}}
					>
						Search
					</button>
				</div>

				{/* <div className="">
					<input
						type="text"
						name=""
						id=""
						onChange={(e) => {}}
						className="border border-gray-300 "
					/>
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
				</div> */}
			</div>
			{filteredRestaurantList.length === 0 ? (
				<Shimmer />
			) : (
				<div className="m-7 flex flex-col justify-center items-center gap-5 md:grid md:grid-cols-2 md:gap-7 lg:grid lg:grid-cols-3 lg:gap-7 animate__fadeInUp">
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
