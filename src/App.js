import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/COntact";
import RestaurantCard from "./Components/RestaurantCard";
import RestaurantDetails from "./Components/RestaurantDetails";
import Profile from "./Components/Profile";
function container() {
	return <Header />;
}

function AppLayout() {
	console.log("Aryan said Render");
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
				element: <Body />,
			},
			{
				path: "/about",
				element: <About />,
				children: [
					{
						path: "/about/profile",
						element: <Profile />,
					},
				],
			},

			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "restaurant/:id",
				element: <RestaurantDetails />,
			},
		],
	},
]);

const root = document.getElementById("root");

const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(<RouterProvider router={router} />);
