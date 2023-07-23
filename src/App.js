import React, { lazy, Suspense, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./Components/Error";
import RestaurantDetails from "./Components/RestaurantDetails";
import Profile from "./Components/Profile";
import Shimmer from "./Components/Shimmer";
import { UserContext } from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Body from "./Components/Body";
const Instamart = lazy(() => import("./Components/Instamart"));
const Contact = lazy(() => import("./Components/Contact"));
const About = lazy(() => import("./Components/About"));
const Cart = lazy(() => import("./Components/Cart"));

function AppLayout() {
	const [user, setUser] = useState({
		name: "Aryan Nagbanshi",
		email: "aryan.s.nag@gmail.com",
	});
	return (
		<Provider store={store}>
			<UserContext.Provider value={{ user: user, setUser: setUser }}>
				<Header />
				<Outlet />
				<Footer />
			</UserContext.Provider>
		</Provider>
	);
}

const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/about",
				element: (
					<Suspense>
						<About />
					</Suspense>
				),
				children: [
					{
						path: "/about/profile",
						element: <Profile />,
					},
				],
			},
			{
				path: "/contact",
				element: (
					<Suspense>
						<Contact />
					</Suspense>
				),
			},
			{
				path: "restaurant/:id",
				element: <RestaurantDetails />,
			},
			{
				path: "/instamart",
				element: (
					<Suspense>
						<Instamart />
					</Suspense>
				),
			},
			{
				path: "/cart",
				element: (
					<Suspense>
						<Cart />
					</Suspense>
				),
			},
		],
	},
]);

const root = document.getElementById("root");

const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(
	<RouterProvider router={router} fallbackElement={<Shimmer />} />
);
