import firebase from "firebase"


const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyB3d495DYhHyxiYwDuPWwMKc3pFHWESjiU",
        authDomain: "chattie-c8abd.firebaseapp.com",
        databaseURL: "https://chattie-c8abd.firebaseio.com",
        projectId: "chattie-c8abd",
        storageBucket: "chattie-c8abd.appspot.com",
        messagingSenderId: "700146427866",
        appId: "1:700146427866:web:a9013216ac7ae59b6a42e3",
        measurementId: "G-NQWFF7N8D4"
        
  });

  const db = firebaseApp.firestore()

  export default db