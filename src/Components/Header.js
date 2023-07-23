import UseState from "../images/UseState.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../Hooks/useOnline";
import { useSelector } from "react-redux/es/hooks/useSelector";
import store from "../utils/store";

export default function Header() {
	/* 
	Header
			Logo 
			Home 
			ABOUT US
			cart
			contact us
			Login button(toogle)
	 */
	const [loggedIn, setLoggedIn] = useState(false);
	const isOnline = useOnline();
	const cartItems = useSelector((store) => store.cart.items);
	return (
		<div id="Header" className="container">
			<img src={UseState} alt="Logo" className="image1" />
			<div className="navbar">
				<ul>
					<Link to="/">
						<li key={1}>Home</li>
					</Link>
					<Link to="/about">
						<li key={2}>About Us</li>
					</Link>
					<Link to="/contact">
						<li key={3}>Contact Us</li>
					</Link>

					<Link to="/instamart">
						<li key={6}>Instamart</li>
					</Link>
					<Link to="#" onClick={() => setLoggedIn(!loggedIn)}>
						<li key={7}>{loggedIn ? "Logout" : "Login"}</li>
					</Link>
					<Link to="/cart">
						<li key={4}>Cart - {cartItems.length} items</li>
					</Link>
					<Link to="#">
						<li key={5}>{isOnline ? "✅" : "🔴"}</li>
					</Link>
				</ul>
			</div>
		</div>
	);
}
