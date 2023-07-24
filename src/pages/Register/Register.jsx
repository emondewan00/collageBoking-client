import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";

const Register = () => {
  const { emailAndPass, registerErr, currentUser } = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPass, setConfPass] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (password.match(confPass)) {
      emailAndPass(email, password, userName, image);
      setError("");
    } else {
      setError("Password is not match");
    }
  };
  console.log(currentUser);
  return (
    <div className="md:max-w-xl   px-4 my-10 md:my-16 md:px-0 mx-auto">
      <div className="card border  bg-gray-100 p-10">
        <h1 className="card-title pb-4 text-center mx-auto  font-bold">
          Register Now
        </h1>
        <hr />
        <form className="mt-3" onSubmit={submitHandler}>
          <div>
            <label htmlFor="name" className="text-xl font-semibold">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setUserName(e.target.value)}
              required
              placeholder="Enter your name"
              className="my-input"
            />
          </div>
          <div>
            <label htmlFor="img-url" className="text-xl font-semibold">
              Image URL
            </label>
            <input
              type="url"
              name="img-url"
              id="img-url"
              onChange={(e) => setImage(e.target.value)}
              required
              placeholder="Enter your image url"
              className="my-input"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-xl font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="my-input"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-xl font-semibold ">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              minLength="6"
              maxLength="12"
              required
              placeholder="Enter your password"
              className="my-input"
            />
          </div>
          <div>
            <label htmlFor="confPass" className="text-xl font-semibold ">
              Conform password
            </label>
            <input
              type="password"
              name="confPass"
              id="confPass"
              onChange={(e) => setConfPass(e.target.value)}
              minLength="6"
              maxLength="12"
              required
              placeholder="Enter your conform password"
              className="my-input"
            />
          </div>
          <button type="submit" className="btn btn-active w-full">
            Register
          </button>
          <p className="text-center mt-2 text-lg font-semibold">
            All Ready Have An Account?{" "}
            <Link to="/login" className="text-red-500">
              Login
            </Link>
          </p>
          <p className="text-red-600 mt-2 text-xl font-semibold">
            {/* {error ? error : registerErr} */}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
