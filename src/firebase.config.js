import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCmLghV-BQBXo9xrLsTa_Mns4wMV8kymPw",
    authDomain: "restaurantapp-e0f0a.firebaseapp.com",
    databaseURL: "https://restaurantapp-e0f0a-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-e0f0a",
    storageBucket: "restaurantapp-e0f0a.appspot.com",
    messagingSenderId: "713181999781",
    appId: "1:713181999781:web:dae391ecefbaf718e2d34c"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export { app, firestore, storage };