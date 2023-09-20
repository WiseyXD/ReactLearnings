import { useFirebase } from "../utils/firebaseContext";

export default function Signup() {
	const firebase = useFirebase();
	console.log(firebase);
	const GsignUp = () => {
		firebase
			.googleSignin()
			.then(console.log("Done Google signin"))
			.catch((err) => console.log(err));
	};
	return (
		<div className="container w-3/4 mx-auto my-0">
			<button
				className="text-3xl font-semibold bg-green-500"
				onClick={GsignUp}
			>
				Google Signin
			</button>
		</div>
	);
}
