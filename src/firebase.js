import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
	apiKey: "AIzaSyB5Gi8OqmOT2GrE_e6Hxr2cONhM_HhlPlI",
	authDomain: "swiggy-clone-8144f.firebaseapp.com",
	projectId: "swiggy-clone-8144f",
	storageBucket: "swiggy-clone-8144f.appspot.com",
	messagingSenderId: "49954626532",
	appId: "1:49954626532:web:1f491b5f60aa3e288505f1",
	measurementId: "G-8CF30JQYFC",
	databaseURL: "https://swiggy-clone-8144f-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);
