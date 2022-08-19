import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

import Feed from "../../components/feed/Feed";
import Sidebar from "../../components/sidebar/Sidebar";
import { loginAction, logout, selectUser } from "../../features/userSlice";
import { auth } from "../../firebase/FirebaseConfig";
import Layout from "../../layout/Layout";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import Widgets from "../../components/widgets/Widgets";

const HomePage = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const checkUserAuth = () => {
    try {
      onAuthStateChanged(auth, (user) => {
        // user is login
        if (user) {
          dispatch(
            loginAction({
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
              photoURL: user.photoURL,
            })
          );
        } else {
          dispatch(logout());
          navigate("/login");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUserAuth();
  }, []);

  return (
    <>
      {!user ? (
        <LoadingSpinner />
      ) : (
        <Layout>
          <Sidebar />
          <Feed />
          <Widgets />
        </Layout>
      )}
    </>
  );
};

export default HomePage;
