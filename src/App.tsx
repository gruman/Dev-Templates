import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './constants/firebase'

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
  signOut,
  onAuthStateChanged,
  User
} from "firebase/auth";
import Home from './pages/Home';
import Login from './pages/Login';
import NavBar from './components/NavBar';

function App(): JSX.Element {
  const [loading, setLoading] = useState(true);

  const auth = getAuth();
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (userCredential) => {
      // check if user is already logged in
      if (userCredential) {
        setUser(userCredential);
      } else {
        setUser(null);
      }
    });
  }, []);

  if (loading) { return (<div className="container"><p>Loading</p></div>) }
  return (
    <BrowserRouter>
    <div className="container">
        <NavBar user={user} />
      {
        user ?
        <>
          <Routes>
            <Route path="/" element={<Home user={user} />} />
          </Routes>
          </>
          :
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
}
          </div>
    </BrowserRouter>
  );
}

export default App;
