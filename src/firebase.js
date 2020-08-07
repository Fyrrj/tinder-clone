import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBy5PQ7UZAzJbjewmAMXjkCtuBMDJnmSKw",
  authDomain: "tinder-clone-b5a9b.firebaseapp.com",
  databaseURL: "https://tinder-clone-b5a9b.firebaseio.com",
  projectId: "tinder-clone-b5a9b",
  storageBucket: "tinder-clone-b5a9b.appspot.com",
  messagingSenderId: "598028051574",
  appId: "1:598028051574:web:b89694665e9012f4d16b57",
  measurementId: "G-KNCRJ0HNCL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
