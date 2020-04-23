import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABojK1yk7ng_CTSJMZ3LvYLJuoTuLpcw8",
  authDomain: "nimmane-ca442.firebaseapp.com",
  databaseURL: "https://nimmane-ca442.firebaseio.com",
  projectId: "nimmane-ca442",
  storageBucket: "nimmane-ca442.appspot.com",
  messagingSenderId: "862646182641",
  appId: "1:862646182641:web:1d16222d37644f96f63f50"
};

export const mFirebase = firebase.initializeApp(firebaseConfig);
export const db = firebase
  .firestore()
  .settings({ timestampsInSnapshots: true });
