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
		<div className="container">
			<h1>Number of items in the cart {cart.length}</h1>
			<div>
				{cart.map((item) => {
					return (
						<div className="flex">
							<h3>{item.card.info.name}</h3>
							<button
								className="remove-btn"
								onClick={() => handleRemoveItem(cart, item)}
							>
								Remove
							</button>
						</div>
					);
				})}
			</div>

			<button onClick={() => handleClearCart(store.cart)}>
				Clear Cart
			</button>
			<button onClick={() => handlePopItem(store.cart)}>
				Pop last Item
			</button>
		</div>
	);
}
