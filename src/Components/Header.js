import UseState from "../images/UseState.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../Hooks/useOnline";
import { useSelector } from "react-redux/es/hooks/useSelector";
import store from "../utils/store";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

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
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	// Header Done
	return (
		<div className="bg-gray-200 shadow-lg shadow-slate-300 mb-5 uppercase">
			<div className="max-w-7xl w-[90%] mx-auto my-0 ">
				<div
					id="Header"
					className="mx-4 flex justify-between items-center basis-1/3 "
				>
					<div className="basis-1/2">
						<a href="/" className="">
							<img
								src={UseState}
								alt="Logo"
								className="w-[40%]"
							/>
						</a>
					</div>

					<div className="navbar hidden lg:block basis-1/2">
						<ul className="flex gap-x-5 text-lg font-semibold text-gray-500">
							<Link to="/">
								<li key={1}>Home</li>
							</Link>
							<Link to="/about">
								<li key={2}>About</li>
							</Link>
							<Link to="/contact">
								<li key={3}>Contact</li>
							</Link>

							<Link to="/instamart">
								<li key={6}>Instamart</li>
							</Link>
							<Link to="#" onClick={() => setLoggedIn(!loggedIn)}>
								<li key={7}>{loggedIn ? "Logout" : "Login"}</li>
							</Link>
							<Link to="/cart">
								<li key={4}>Cart - {cartItems.length}</li>
							</Link>
							<Link to="#">
								<li key={5}>{isOnline ? "✅" : "🔴"}</li>
							</Link>
						</ul>
					</div>
					<>
						{isMenuOpen ? (
							<button className="lg:hidden">
								<RxCross1
									size={30}
									onClick={() => setIsMenuOpen(!isMenuOpen)}
								/>
							</button>
						) : (
							<button className="lg:hidden">
								<RxHamburgerMenu
									size={30}
									onClick={() => setIsMenuOpen(!isMenuOpen)}
								/>
							</button>
						)}
					</>
				</div>
			</div>
			<div className="absolute bg-gray-100 w-full shadow-lg shadow-slate-600">
				{isMenuOpen && (
					<ul className="flex flex-col justify-center items-center gap-y-1 text-lg font-semibold">
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
				)}
			</div>
		</div>
	);
}
