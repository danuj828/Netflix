import React, { useRef, useState } from "react";
import Header from "./Header";
import NetflixBackground from "../Images/NetflixBackground.jpg";
import { isValidData } from "../Utils/Validate";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/UserSlice";

const Login = () => {
  const [isSignInForm, setIsSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const toggleSignUpForm = () => {
    setIsSignForm(!isSignInForm);
  };

  const email = useRef();
  const password = useRef();
  const name = useRef();

  const handleValidData = () => {
    const message = isValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message === null) {
      if (!isSignInForm) {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value,
            })
              .then(() => {
                const { uid, email, displayName } = auth.currentUser;
                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                  })
                );
              })
              .catch((error) => {
                setErrorMessage(error.message);
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
          });
      } else {
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
          });
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img alt="background" src={NetflixBackground} />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 p-12 my-36 mx-auto left-0 right-0 bg-black text-white rounded-lg bg-opacity-80"
      >
        <h1 className="text-2xl font-bold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full rounded-md text-black"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full rounded-md text-black"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full rounded-md text-black"
        ></input>
        <p className="text-red-500 font-bold">{errorMessage}</p>
        <button
          className="border border-black text-white p-2 my-4 bg-red-500 w-full rounded-md"
          onClick={handleValidData}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <button className="underline">
          {isSignInForm ? "Forgot Password?" : ""}
        </button>
        <p className="py-4 underline cursor-pointer" onClick={toggleSignUpForm}>
          {isSignInForm
            ? "New to Netflix? Sign up Now"
            : "Already a User. Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
