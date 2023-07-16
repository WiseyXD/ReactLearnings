export default function Shimmer() {
	return (
		<div className="flex-list">
			{Array(10)
				.fill("")
				.map((ele, index) => (
					<EmptyRestaurantCard key={index} />
				))}
		</div>
	);
}

function EmptyRestaurantCard() {
	return (
		<div className="card-empty">
			<div className="shimmerBG media"></div>
			<div className="p-32">
				<div className="shimmerBG title-line"></div>
				<div className="shimmerBG title-line end"></div>

				<div className="shimmerBG content-line m-t-24"></div>
				<div className="shimmerBG content-line"></div>
				<div className="shimmerBG content-line"></div>
				<div className="shimmerBG content-line"></div>
				<div className="shimmerBG content-line end"></div>
			</div>
		</div>
	);
}
