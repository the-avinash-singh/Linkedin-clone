import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import LinkedinPage from "./components/LinkedinPage";
import Signin from "./components/Signin";
import Landing from "./components/Landing";
import Navigation from "./components/Navigation";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase-config";
import Spinner from "./components/Spinner";

function App() {
  const [user,setUser]=useState(null)
  const [loading, setLoading]=useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false)
    });

    return () => unsubscribe();
  }, []);
  return (
    <>
      {loading?<Spinner/>:<Router>
      <Navigation user={user}/>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/profile" element={<LinkedinPage user={user}/>}/>
        </Routes>
      </Router>}
    </>
  );
}

export default App;
