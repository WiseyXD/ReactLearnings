import React from "react";
import { app } from "../firebase";
import { getDatabase, ref, set } from "firebase/database";

const db = getDatabase(app);
export default function Profile() {
	function updateDB() {
		set(ref(db, "users/ari"), {
			name: "Aryan",
			age: 20,
			workout: true,
		});
	}
	return (
		<div>
			<button
				onClick={updateDB}
				className="cursor-pointer text-3xl font-bold"
			>
				Click me
			</button>
		</div>
	);
}
