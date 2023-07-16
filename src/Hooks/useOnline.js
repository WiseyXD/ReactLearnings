import { useEffect, useState } from "react";
export default function useOnline() {
	const [isOnline, setisOnline] = useState(true);

	function setOffline() {
		setisOnline(false);
	}

	function setOnline() {
		setisOnline(true);
	}
	useEffect(() => {
		window.addEventListener("online", setOnline);
		window.addEventListener("offline", setOffline);

		return () => {
			window.removeEventListener("online", setOnline);
			window.removeEventListener("offline", setOffline);
		};
	}, []);

	return isOnline;
}
