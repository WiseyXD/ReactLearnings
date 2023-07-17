import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./Components/Error";
import RestaurantDetails from "./Components/RestaurantDetails";
import Profile from "./Components/Profile";
import Shimmer from "./Components/Shimmer";

const Body = lazy(() => import("./Components/Body"));
const Instamart = lazy(() => import("./Components/Instamart"));
const Contact = lazy(() => import("./Components/Contact"));
const About = lazy(() => import("./Components/About"));
function AppLayout() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
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
				element: (
					<Suspense>
						<Body />
					</Suspense>
				),
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
		],
	},
]);

const root = document.getElementById("root");

const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(
	<RouterProvider router={router} fallbackElement={<Shimmer />} />
);
