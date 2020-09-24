import firebase from "firebase";
// import Rebase from "re-base";
// import * as sensitive from "../../sensitive.json";
// Initialize Firebase
const config = {
  // Initialize Firebase
  // apiKey: sensitive.APIKEY,
  // authDomain: sensitive.authDomain,
  // databaseURL: sensitive.databaseURL,
  // projectId: sensitive.projectId,
  // storageBucket: sensitive.storageBucket,
  // messagingSenderId: sensitive.messagingSenderId,
  apiKey: "AIzaSyDSt4YsOAwXBzrMCYWXB25HOYPalZQSD8A",
  authDomain: "parmeet-b2bef.firebaseapp.com",
  databaseURL: "https://parmeet-b2bef.firebaseio.com",
  projectId: "parmeet-b2bef",
  storageBucket: "parmeet-b2bef.appspot.com",
  messagingSenderId: "673947167664",
};

const app = firebase.initializeApp(config);
// const base = Rebase.createClass(app.database());
const firebaseDB = app.database();
export { app, firebaseDB };
