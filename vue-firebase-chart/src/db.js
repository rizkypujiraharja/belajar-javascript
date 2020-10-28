import firebase from 'firebase/app';
import 'firebase/database';

// Get a Firestore instance
export const db = firebase
    .initializeApp({
        apiKey: "AIzaSyDefcJn89Vyd2-alkxbPMQAt5SV2fgG7_E",
        authDomain: "development-283204.firebaseapp.com",
        databaseURL: "https://development-283204.firebaseio.com",
        projectId: "development-283204",
        storageBucket: "development-283204.appspot.com",
        messagingSenderId: "648920310158",
        appId: "1:648920310158:web:b808fbaa71cadeb20084df",
        measurementId: "G-D17X5YQS95",
    }).database()