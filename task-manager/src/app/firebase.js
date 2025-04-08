import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import 'firebase/auth';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAnre--I6zBsO1JCNy2g5C3rwlmQHCykOw",
    authDomain: "todo-app-a78fa.firebaseapp.com",
    projectId: "todo-app-a78fa",
    storageBucket: "todo-app-a78fa.firebasestorage.app",
    messagingSenderId: "535824968525",
    appId: "1:535824968525:web:d9c999471abe818fcb2504",
    measurementId: "G-1DMPCHL485"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };