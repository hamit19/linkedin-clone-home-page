import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { auth } from "../../firebase/FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import Input from "../../components/input/Input";
import "./RegisterPage.css";
import linkedinLogo from "../../assets/images/linkedinLogo.png";
import { loginAction } from "../../features/userSlice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LoadingSpinnerBtn from "../../components/buttonsLoadingSpinner/LoadingSpinnerBtn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterPage = () => {
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    email: "",
    password: "",
    photoURL: "",
  });

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const signup = async (email, password) => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          updateProfile(auth.currentUser, {
            displayName: userInfo.fullName,
            photoURL: userInfo.photoURL,
          });
        })
        .then(() => {
          setTimeout(() => {
            dispatch(
              loginAction({
                uid: auth.currentUser.uid,
                email: auth.currentUser.email,
                displayName: auth.currentUser.displayName,
                photoURL: auth.currentUser.photoURL,
              })
            );
          }, 1000);
        })
        .then(() => {
          setTimeout(() => {
            navigate("/");
          }, 2000);
        });
    } catch (error) {
      const errorMessage = error
        .toString()
        .split(" ")[3]
        .split("/")[1]
        .split(")")[0];

      toast.error(errorMessage);
      setLoading(false);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!userInfo.fullName) {
      toast.warn("You should have a name!");
    } else {
      signup(userInfo.email, userInfo.password);
    }
  };

  const checkUserAuth = () => {
    try {
      onAuthStateChanged(auth, (user) => {
        // user is login
        if (user) {
          navigate("/");
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
    <div className="page-wrapper">
      <ToastContainer />
      <form className="form" onSubmit={onSubmitHandler}>
        <div className="logo__wrapper">
          <img src={linkedinLogo} alt="Linkedin Logo" />
        </div>

        <Input
          placeholder="Full name (required if you registering!)"
          type="text"
          name="fullName"
          onChange={onChangeHandler}
        />
        <Input
          placeholder="Profile pic Url (optional!) "
          type="text"
          name="photoURL"
          onChange={onChangeHandler}
        />
        <Input
          placeholder="Your email..."
          type="email"
          name="email"
          onChange={onChangeHandler}
        />
        <Input
          placeholder="Password..."
          type="password"
          name="password"
          onChange={onChangeHandler}
        />
        <button className="button" type="submit">
          {loading ? <LoadingSpinnerBtn /> : "Sign up"}
        </button>
        <p className="login__message">
          {" "}
          Do you have already an account?{" "}
          <Link className="link" replace to="/login">
            {" "}
            Login{" "}
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
