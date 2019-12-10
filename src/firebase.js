import firebase from "firebase";

const config = {
	apiKey: "AIzaSyAWeZzQsk6WoPhoxMvoQxzPr4-omb2nWn4",
	authDomain: "lunch-rush-3a5d7.firebaseapp.com",
	databaseURL: "https://lunch-rush-3a5d7.firebaseio.com",
	storageBucket: "lunch-rush-3a5d7.appspot.com",
	messagingSenderId: "1076730825042"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
