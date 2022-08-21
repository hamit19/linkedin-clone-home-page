import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import linkedinLogo from "../../assets/images/linkedinLogo.png";
import Input from "../../components/input/Input";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/FirebaseConfig";
import { loginAction } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";
import LoadingSpinnerBtn from "../../components/buttonsLoadingSpinner/LoadingSpinnerBtn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const login = async (email, password) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password)
        .then((userAuth) => {
          localStorage.getItem("token") && localStorage.removeItem("token");

          localStorage.setItem(
            "token",
            JSON.stringify(userAuth.user.accessToken)
          );

          dispatch(
            loginAction({
              uid: userAuth.user.uid,
              email: userAuth.user.email,
              displayName: userAuth.user.displayName,
              photoURL: userAuth.user.photoURL,
            })
          );
        })
        .then(() => navigate("/"));
    } catch (error) {
      const errorMessage = error
        .toString()
        .split(" ")[3]
        .split("/")[1]
        .split(")")[0];

      console.log(errorMessage);

      toast.error(errorMessage);

      setLoading(false);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!userInfo) {
      alert("You should fill the fields!");
    } else {
      login(userInfo.email, userInfo.password);
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
          {loading ? <LoadingSpinnerBtn /> : "Sign In"}
        </button>
        <p className="login__message">
          {" "}
          Not a member?{" "}
          <Link className="link" replace to="/signup">
            {" "}
            Signup{" "}
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
