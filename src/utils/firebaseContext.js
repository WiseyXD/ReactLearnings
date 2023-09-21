import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
	onAuthStateChanged,
} from "firebase/auth";
import { set, ref, getDatabase } from "firebase/database";

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

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const db = getDatabase(firebaseApp);
const Gprovider = new GoogleAuthProvider();

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
	const signUpUser = (email, password) => {
		return createUserWithEmailAndPassword(firebaseAuth, email, password);
	};
	const googleSignin = () => {
		return signInWithPopup(firebaseAuth, Gprovider);
	};
	const authChanged = () => {
		return onAuthStateChanged(firebaseAuth, (user) => {
			if (user) {
				console.log(user);
				return user;
			} else {
				console.log("No user");
				return false;
			}
		});
	};
	const putData = (key, data) => set(ref(db, key), data);
	return (
		<FirebaseContext.Provider
			value={{ googleSignin, authChanged, signUpUser, putData }}
		>
			{props.children}
		</FirebaseContext.Provider>
	);
};
