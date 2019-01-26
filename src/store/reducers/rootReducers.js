import AuthReducer from "./authReducers";
import { firestoreReducer } from "redux-firestore";
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";

const RootReducer = combineReducers({
  auth: AuthReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default RootReducer;
