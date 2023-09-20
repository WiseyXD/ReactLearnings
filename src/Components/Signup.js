import { useState } from "react";
import { useFirebase } from "../utils/firebaseContext";

export default function Signup() {
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
	const GsignUp = () => {
		firebase
			.googleSignin()
			.then(console.log("Done Google signin"))
			.catch((err) => console.log(err));
	};
	return (
		<div className="container w-3/4 mx-auto my-0">
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
				<h1 className="text-2xl m-5"> OR</h1>
			</div>
			<button
				className="text-3xl font-semibold bg-green-500"
				onClick={GsignUp}
			>
				Google Signin
			</button>
		</div>
	);
}
