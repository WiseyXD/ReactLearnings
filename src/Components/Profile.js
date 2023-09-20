import React, { useState } from "react";
import { app } from "../firebase";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth(app);

export default function Profile() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loginEmail, setLoginEmail] = useState("");
	const [loginPassword, setLoginPassword] = useState("");
	const createUser = () => {
		createUserWithEmailAndPassword(auth, email, password)
			.then(alert("Signed in successfull"))
			.catch((err) => console.log(err));
	};
	const loginUser = () => {
		signInWithEmailAndPassword(auth, loginEmail, loginPassword)
			.then(console.log("Success Login"))
			.catch((err) => console.log(err));
	};
	return (
		<>
			<div>
				<h1 className="text-2xl font-semibold">Register </h1>
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
			<div>
				<h1 className="text-2xl font-semibold">Login </h1>
				<input
					type="email"
					placeholder="email"
					name="email"
					onChange={(e) => setLoginEmail(e.target.value)}
				/>
				<input
					type="password"
					name="password"
					id=""
					placeholder="password"
					onChange={(e) => setLoginPassword(e.target.value)}
				/>

				<button
					onClick={loginUser}
					className="cursor-pointer text-3xl font-bold"
				>
					Login
				</button>
			</div>
		</>
	);
}
