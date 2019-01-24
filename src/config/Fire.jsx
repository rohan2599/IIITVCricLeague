import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCehdntdWsQgDktn2vM7rg9IsHfav7OIaQ",
  authDomain: "cricket-1fa9b.firebaseapp.com",
  databaseURL: "https://cricket-1fa9b.firebaseio.com",
  projectId: "cricket-1fa9b",
  storageBucket: "cricket-1fa9b.appspot.com",
  messagingSenderId: "872981313255"
};
const fire = firebase.initializeApp(config);

export default fire;
