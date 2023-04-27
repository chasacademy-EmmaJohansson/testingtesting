import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCr3RVdPXOFzmwnt9gj4ToTkrWZ2yFhbGE",
  authDomain: "fir-test-8c20c.firebaseapp.com",
  projectId: "fir-test-8c20c",
  storageBucket: "fir-test-8c20c.appspot.com",
  messagingSenderId: "147952982955",
  appId: "1:147952982955:web:96cd488ca18520d6e290ee",
  measurementId: "G-PY2WJN5276",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
