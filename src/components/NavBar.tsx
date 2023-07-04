import React, { useState, useEffect } from "react";
import {
  getAuth,
  signOut
} from "firebase/auth";

function App(props: any): JSX.Element {

  const auth = getAuth();
  function handleLogout(): void {
    signOut(auth);
  }

  useEffect(() => {
    console.log(props);
  })

  return (
    <header>
      <h1>Login Website</h1>
      {props.user ? <p onClick={() => handleLogout()}>Logout</p> : ""}
       </header>
  );
}

export default App;