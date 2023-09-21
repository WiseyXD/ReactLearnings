import { useEffect, useState } from "react";
import { useFirebase } from "../utils/firebaseContext";

// TODO: Logout Functionality and Conditional rendering

export default function Signup() {
	const [user, setUser] = useState(null);
	const firebase = useFirebase();
	console.log(firebase);
	const GsignUp = () => {
		firebase
			.googleSignin()
			.then(console.log("Done Google signin"))
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		if (firebase.authChanged()) {
			setUser(user);
		} else {
			setUser(null);
		}
	}, []);

	if (user) {
		return (
			<>
				<h1 className="text-3xl font-bold"> {user.email}</h1>
				<button>Logout</button>
			</>
		);
	} else {
		return (
			<>
				<button
					className="text-3xl font-semibold bg-green-500"
					onClick={GsignUp}
				>
					Google Signin
				</button>
			</>
		);
	}
}
