import React, { useContext, useRef } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthProvider, { AuthContext } from "../../Auth/AuthProvider";

const LogWithEmailAndPass = () => {
  const { loginWithGoogle, resetPass, logInEmailAndPass, githubLogin } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const emailRaf = useRef();

  const whatWillBeGo = location?.state?.from?.pathname || "/";
  //login with google
  const googleLog = () => {
    loginWithGoogle();
    navigate(whatWillBeGo);
  };

  //login with github
  const githubLog = () => {
    githubLogin();
    navigate(whatWillBeGo);
  };

  //login With email and pass
  const submitHandler = (event) => {
    event.preventDefault();
    const element = event.target.elements;
    let value = {};
    for (let x of element) {
      value[x.name] = x.value;
    }
    delete value[""];
    const { email, password } = value || {};
    logInEmailAndPass(email, password);
    navigate(whatWillBeGo);
  };

  //forgot Password handler
  const forgotPass = () => {
    const email = emailRaf.current.value;
  };
  return (
    <div className="md:w-1/3  px-4 my-10 md:my-16 md:px-0 mx-auto">
      <div className="card border my-auto shadow-xl  bg-gray-100 p-10">
        <h1 className="card-title pb-4 text-center mx-auto  font-bold">
          Login your account
        </h1>
        <hr />
        <div className="my-8 grid grid-cols-2 gap-2">
          <button className="my-btn  " onClick={googleLog}>
            <FaGoogle className="me-2" />
            Google{" "}
          </button>
          <button className="my-btn" onClick={githubLog}>
            <FaGithub />
            Github{" "}
          </button>
        </div>

        <form className="" onSubmit={submitHandler}>
          <label htmlFor="email" className="text-xl  font-semibold">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            ref={emailRaf}
            placeholder="Enter your email"
            className="my-input"
          />
          <label htmlFor="password" className="text-xl font-semibold ">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            className="my-input"
          />
          <button type="submit" className="btn btn-active w-full">
            Login
          </button>
          <p className="text-center mt-2 text-lg font-semibold">
            Don&#39;t Have An Account?{" "}
            <Link
              to="/register"
              className="text-blue-500 underline-offset-4 underline decoration-blue-500 decoration-2"
            >
              Register
            </Link>
            <br />
            <span
              onClick={forgotPass}
              className="cursor-pointer underline-offset-4 underline decoration-blue-500 decoration-2"
            >
              Forgot passwort
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogWithEmailAndPass;
