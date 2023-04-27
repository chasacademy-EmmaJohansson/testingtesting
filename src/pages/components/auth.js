import { auth, googleProvider } from "@/config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(auth?.currentUser?.photoURL);

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex gap-4 py-48 pl-48">
      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="text-black border border-white"
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className="text-black border border-white"
      />
      <button onClick={signIn} className="border border-white">
        Log In
      </button>

      <button onClick={signInWithGoogle} className="border border-white">
        Sign in with Google
      </button>

      <button onClick={logout} className="border border-white">
        Log Out
      </button>
    </div>
  );
};
