import React, { useContext, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const { currentUser, loading } = useContext(AuthContext);
  // console.log(currentUser);
  const menuHandler = () => {
    setNav(!nav);
  };
  const routes = [
    { id: 1, route: "Home", ref: "#home" },
    { id: 2, route: "About", ref: "#about" },
    { id: 3, route: "Works", ref: "#works" },
    { id: 4, route: "Contact", ref: "#contact" },
  ];
  // console.log(loading, currentUser);
  return (
    <div className="  text-white bg-gray-700 ">
      <nav className="p-5 container md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center ">
          <Link to="/" className="text-2xl cursor-pointer font-serif">
            Dream Collage
          </Link>

          <span
            className="text-3xl cursor-pointer mx-2 md:hidden block"
            onClick={menuHandler}
          >
            <HiMenu />
          </span>
        </div>
        <ul
          className={`md:flex md:items-center bg-primary md:bg-transparent overflow-hidden z-40 md:z-auto absolute md:sticky  w-full left-0  md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100  gap-2 ${
            nav ? "top-[70px]" : "top-[-400px]"
          }`}
        >
          {/* {routes.map((route) => (
            <li key={route.id} className="me-2">
              <NavLink href={route.ref} className="text-cs hover:text-white">
                Home
              </NavLink>
            </li>
          ))} */}
          <li className="me-2">
            <Link to="/" className="text-cs hover:text-white">
              Home
            </Link>
          </li>
          <li className="me-2">
            <Link to="collages">Collage</Link>
          </li>
          <li className="me-2">
            <Link to="admission">Admission</Link>
          </li>
          <li className="me-2">
            <Link to="myCollage">My College</Link>
          </li>
          <li className="me-2">
            {!loading && !currentUser ? (
              <Link to="/login">Login</Link>
            ) : (
              <Link to="/profile">
                <img
                  src={currentUser.photoURL}
                  width="40px"
                  height="40px"
                  title={currentUser.displayName}
                  alt="user"
                  className="rounded-full ring ring-cyan-600"
                />
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
