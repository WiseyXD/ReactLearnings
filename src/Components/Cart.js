import { useDispatch, useSelector } from "react-redux";
import store from "../utils/store";
import { clearCart, removeItem, removeLastItem } from "../utils/cartSlice";

export default function Cart() {
	const cart = useSelector((store) => store.cart.items);
	const dispatch = useDispatch();
	function handleClearCart(cart) {
		dispatch(clearCart(cart));
	}
	function handlePopItem(cart) {
		dispatch(removeLastItem(cart));
	}
	function handleRemoveItem(cart, item) {
		dispatch(removeItem(cart.indexOf(item)));
	}
	console.log(cart);
	return (
		<div className="max-w-7xl w-1/2 mx-auto my-0">
			<h1 className="text-3xl font-bold">
				Number of items in the cart {cart.length}
			</h1>
			<div className="flex flex-col gap-2 my-3">
				{cart.map((item) => {
					return (
						<div className="flex gap-5">
							<h3 className="text-xl font-semibold">
								{item.card.info.name}
							</h3>
							<button
								className="remove-btn bg-red-500 text-gray-100 px-2 py-1 rounded-md hover:shadow-lg duration-200 ease-in-out"
								onClick={() => handleRemoveItem(cart, item)}
							>
								Remove
							</button>
						</div>
					);
				})}
			</div>
			<div className="flex items-start gap-2 my-3">
				<button
					className="bg-green-400 text-gray-100 px-2 py-1 rounded-md hover:shadow-lg duration-200 ease-in-out"
					onClick={() => handleClearCart(store.cart)}
				>
					Clear Cart
				</button>
				<button
					className="bg-green-400 text-gray-100 px-2 py-1 rounded-md hover:shadow-lg duration-200 ease-in-out"
					onClick={() => handlePopItem(store.cart)}
				>
					Pop last Item
				</button>
			</div>
		</div>
	);
}
