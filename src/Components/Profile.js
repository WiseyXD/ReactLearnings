import React, { useState } from "react";
import { useFirebase } from "../utils/firebaseContext";

export default function Profile() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loginEmail, setLoginEmail] = useState("");
	const [loginPassword, setLoginPassword] = useState("");
	const firebase = useFirebase();
	console.log(firebase);

	const createUser = () => {
		firebase
			.signUpUser(email, password)
			.then(alert("Signed in successfull"))
			.catch((err) => console.log(err));
	};
	const Gsignin = () => {
		firebase
			.googleSignin()
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
					onClick={Gsignin}
					className="cursor-pointer text-3xl font-bold"
				>
					Login
				</button>
			</div>
		</>
	);
}
