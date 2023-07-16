import UseState from "../images/UseState.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

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
					<Link to="/">
						<li key={4}>Cart</li>
					</Link>
					<Link to="#" onClick={() => setLoggedIn(!loggedIn)}>
						<li key={5}>{loggedIn ? "Logout" : "Login"}</li>
					</Link>
				</ul>
			</div>
		</div>
	);
}
