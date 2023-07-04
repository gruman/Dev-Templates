import React, { useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
  signOut,
  onAuthStateChanged,
  User
} from "firebase/auth";

function App(props: any): JSX.Element {
  const auth = getAuth();
  function handleLogout(): void {
    signOut(auth);
  }

  return (
    <article>
      Hello
    </article>
  );
}

export default App;