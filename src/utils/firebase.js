import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyAF7ZGz-bF-ZR1kxU6QUmNNQvc88CkBgwU",
    authDomain: "graham-test-project-b8ee3.firebaseapp.com",
    databaseURL: "https://graham-test-project-b8ee3.firebaseio.com",
    projectId: "graham-test-project-b8ee3",
    storageBucket: "",
    messagingSenderId: "828013034360"
};
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;