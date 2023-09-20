import React, { useState } from "react";
import { app } from "../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

export default function Profile() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const createUser = () => {
		createUserWithEmailAndPassword(auth, email, password)
			.then(alert("Signed in successfull"))
			.catch((err) => console.log(err));
	};
	return (
		<div>
			<input
				type="email"
				placeholder="email"
				name="email"
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				type="password"
				name="password"
				id=""
				placeholder="password"
				onChange={(e) => setPassword(e.target.value)}
			/>

			<button
				onClick={createUser}
				className="cursor-pointer text-3xl font-bold"
			>
				SignUp
			</button>
		</div>
	);
}
