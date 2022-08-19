import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/FirebaseConfig";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { Routes, Route, useNavigate } from "react-router-dom";

import { loginAction, logout } from "./features/userSlice";
import LoginPage from "./pages/loginPage/LoginPage";
import RegisterPage from "./pages/registerPage/RegisterPage";
import HomePage from "./pages/homePage/HomePage";

const App = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // const checkUserAuth = () => {
  //   try {
  //     onAuthStateChanged(auth, (user) => {
  //       // user is login
  //       if (user) {
  //         dispatch(
  //           loginAction({
  //             uid: user.uid,
  //             displayName: user.displayName,
  //             email: user.email,
  //             photoURL: user.photoURL,
  //           })
  //         );
  //       } else {
  //         dispatch(logout());
  //         navigate("/login");
  //       }
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    // checkUserAuth();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default App;
