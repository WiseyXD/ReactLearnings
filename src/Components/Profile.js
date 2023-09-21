import React, { useState } from "react";
import { useFirebase } from "../utils/firebaseContext";

export default function Profile() {
	const firebase = useFirebase();
	const [user, setUser] = useState(null);

	return <h1>Profile</h1>;
}
