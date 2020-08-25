import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDw3t4lPV-2fGFsdW6aW0X56jVMZbPdTQU",
    authDomain: "imsamimalik.firebaseapp.com",
    databaseURL: "https://imsamimalik.firebaseio.com",
    projectId: "imsamimalik",
    storageBucket: "imsamimalik.appspot.com",
    messagingSenderId: "599300884601",
    appId: "1:599300884601:web:f5bc51822ebadc8d0a6ca8",
    measurementId: "G-9WE478L9Y1",
};

var firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
