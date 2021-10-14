import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyATvuCtCBcaAyYkgvq7JRftZfF3LJWxza0",
  authDomain: "slack-clone-d0c43.firebaseapp.com",
  projectId: "slack-clone-d0c43",
  storageBucket: "slack-clone-d0c43.appspot.com",
  messagingSenderId: "1061534609935",
  appId: "1:1061534609935:web:396ddc0d1ed33868cde97a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
