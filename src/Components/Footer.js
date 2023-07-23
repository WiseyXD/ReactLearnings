import { useContext } from "react";
import { UserContext } from "../utils/UserContext";
export default function Footer() {
	const { user } = useContext(UserContext);
	console.log(user);
	return (
		<div className="container">
			<h1>{user.name}</h1>
			<h2>{user.email}</h2>
		</div>
	);
}
