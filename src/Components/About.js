import React from "react";
import { Outlet } from "react-router-dom";
export default function About() {
	return (
		<div>
			<h1>Hey There aryan is here</h1>
			<h2>Now to speak about me i am 19 Years old</h2>
			<Outlet />
		</div>
	);
}
