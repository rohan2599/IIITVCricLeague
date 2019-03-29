import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import * as serviceWorker from "./serviceWorker";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import RootReducer from "./store/reducers/rootReducers";
import fbConfig from "./config/fbConfig";
import thunk from "redux-thunk";
import { getFirebase } from "react-redux-firebase";
import { reduxFirestore, getFirestore } from "redux-firestore";

const store = createStore(
  RootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig)
  )
);

console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
