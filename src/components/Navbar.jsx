import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [showLogoutBox, setShowLogoutBox] = useState(false);
  const [expandSearch, setExpandSearch] = useState(false);

  const { changeHandler, submitHandler, search } = useContext(AppContext);

  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  const togleSearch = () => {
    setExpandSearch(!expandSearch);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="sticky top-0 bg-white flex justify-between py-4 px-5">
      <Link to="/">
        <div className="flex space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="48"
            height="48"
            viewBox="0 0 512 512"
          >
            <path
              fill="#EF4823"
              d="M460.2,185.5c-21.3-43.4-61.6-77.5-104.2-99C313.2,64.8,263.7,53.4,215.9,61C137,73.5,60.5,131.3,38,208.9c0,0.9-0.2,1.7-0.7,2.6c-0.4,1.4-0.8,2.9-1.1,4.3c-0.5,1-1,2-1.4,3.1c-0.1,0.9-0.3,1.9-0.4,2.7c-0.9,4.1-2,8.2-2.7,12.3c-1.4,7.7-1.1,15.7-3.8,23c-0.2,2.1-0.5,4.2-0.8,6.3c0,0.3,0,0.5,0,0.7c-0.5,4.4-0.9,8.8-1.3,13.2c-0.8,9.2-1.2,18.4-1.1,27.6c0.3,18.1,2.4,36.2,6.9,53.7c8.7,33.3,25.5,64.8,52,87.3c18.2,15.5,39.5,25.7,62.4,32.3c25,7.3,51,11.4,77.1,11.5c51.5,0.1,103.2-13.9,145.6-43.7C447.1,390.7,506.2,279,460.2,185.5z M390.5,324.7c-0.3,11-1.7,22.7-7.8,32.1c-6.7,10.5-16.5,17.3-28.1,21.8c-24,9.4-50.4,9.4-75.8,8.5c-31.2-1-62.2-3.4-93.4-2.1c-20.4,0.8-44,2.3-62.5-8.2c-21.5-12.1-27.7-37.3-29.8-60.2c-1.2-12.8-1.4-25.6-1.8-38.5c-0.5-12.5-1.9-25-1.3-37.5c0.7-11.9,2.6-24,8.4-34.6c5.2-9.7,12.5-17.8,20.6-25c5.8-2.4,11.7-4.6,17.8-6.4c28.3-0.6,56.5,0,84.8,0.4c30.2,0.4,60.1-4.9,90.2-6.6c18.9-1.1,41.5-1,56.8,12c18.5,15.6,19.8,44.3,19.9,66.7c0,14-0.8,28.1-0.1,42.1C388.9,301.1,390.8,312.8,390.5,324.7z"
            ></path>
            <path
              fill="#D6E5E5"
              d="M379.2,314.4c-0.8-12.5-2.1-24.9-2-37.4c0.1-14.2,0.8-28.4-0.1-42.6c-0.8-12.4-2.1-27.1-9-37.8c-11.2-17.5-34.4-18.2-53.1-17.2c-30.2,1.6-60.3,7.1-90.7,6.7c-27.1-0.3-54.1-0.9-81.2-0.5c-0.2,0-0.3,0-0.5,0c-1.4,0-2.8,0-4.1,0.1c-0.8,0-1.6,0-2.5,0c0,0.1-0.1,0.1-0.1,0.2c-1.8,0.3-3.6,0.7-5.2,1.4c-0.7,0.3-1.3,0.6-2,1c-0.3-0.1-0.6-0.3-0.9-0.5c-14.2,12.2-24.3,26.9-26.4,46.2c-2.1,18.7,0.6,38,1.2,56.8c0.6,19,1,39.5,8.8,57.2c6.9,15.6,20.1,22.8,36.5,25.2c10.6,1.5,21.2,1.4,31.9,1c14.7-0.6,29.4-0.8,44.2-0.5c28.6,0.6,57.3,4,85.8,2.4c22.4-1.3,55.1-5.4,65.4-28.9C379.8,336.9,379.9,325.4,379.2,314.4z M274.5,277.3c-0.1,1-0.4,2-1.2,3c-3.3,4.3-9,7.1-13.5,10.1c-5,3.4-10.1,6.6-15.2,9.9c-10.1,6.6-20.1,13.3-29.4,20.9c-2.1,1.7-4.3,1.4-5.9,0.2c-1.5-0.7-2.5-2.2-2.7-4.3c-1.2-26-3-52-3-78c0-3,1.9-4.8,4.2-5.5c1.3-0.7,3-0.8,4.8,0.1c6.7,3.6,13.2,7.6,19.9,11.3c6.3,3.6,13.6,6.2,19.7,10c3.9,2.5,7.7,5.1,11.6,7.6c1.8,1.2,3.6,2.4,5.5,3.4c0.7,0.4,1.4,0.8,2.2,1.1c0.2,0.1,0.3,0.1,0.3,0.1C276.4,268.3,278.6,275,274.5,277.3z"
            ></path>
            <path
              fill="#EF4823"
              d="M261.7,274.5c-4.4-2.8-8.7-5.8-13.1-8.6c-6.1-3.9-13.2-6.5-19.5-10c-4.8-2.7-9.6-5.5-14.4-8.3c0.3,19.5,1.4,38.9,2.4,58.4c6.9-5.1,14.1-9.9,21.4-14.6c5.1-3.3,10.2-6.6,15.2-9.9c2.5-1.7,5-3.4,7.5-5.1c0.5-0.4,1-0.8,1.6-1.2C262.4,274.9,262.1,274.7,261.7,274.5z"
            ></path>
            <path d="M459.9,164.6C434.7,124.2,393.9,93,351.2,73c-43.3-20.2-92.9-29.5-140.3-21.3C129.1,65.9,51,126.4,28,207.4c-3.3,5.5-3.8,13.1-5.2,19.2c-1,4.3-1.7,8.7-2.3,13.1c-0.1,0.4-0.1,0.9-0.2,1.3c-0.1,0.3-0.2,0.5-0.2,0.8c-0.8,4.2-1.5,8.4-2.1,12.6c0,0.1-0.1,0.1-0.1,0.2c-0.5,1.2-0.6,2.3-0.4,3.2c-1,8.1-1.7,16.2-2.3,24.3c-0.8,11.4-0.9,22.9-0.3,34.3c1.3,22.3,5.6,44.5,13.3,65.5c15.3,41.8,45.5,76.5,86.1,95.3c23.1,10.6,48.8,16.7,73.9,20c25.5,3.3,51.5,3.1,77-0.6c50.9-7.4,98.5-29.7,136.1-64.8c36.4-33.9,65-77.6,78.1-125.8C492.7,258,486.4,207.1,459.9,164.6z M368.6,445.9c-42.4,29.8-94.1,43.8-145.6,43.7c-26.1-0.1-52.1-4.2-77.1-11.5c-22.9-6.7-44.2-16.8-62.4-32.3c-26.5-22.5-43.3-54-52-87.3c-4.6-17.5-6.6-35.6-6.9-53.7c-0.2-9.2,0.2-18.4,1.1-27.6c0.4-4.4,0.8-8.8,1.3-13.2c0-0.2,0-0.5,0-0.7c0.3-2.1,0.6-4.2,0.8-6.3c2.7-7.3,2.4-15.4,3.8-23c0.8-4.1,1.8-8.2,2.7-12.3c0.2-0.8,0.3-1.7,0.4-2.7c0.4-1,0.9-2.1,1.4-3.1c0.4-1.4,0.7-2.9,1.1-4.3c0.5-0.9,0.8-1.8,0.7-2.6C60.5,131.3,137,73.5,215.9,61c47.9-7.6,97.3,3.8,140.1,25.5c42.6,21.5,82.8,55.7,104.2,99C506.2,279,447.1,390.7,368.6,445.9z"></path>
            <path d="M388.4,289.3c-0.6-14,0.2-28.1,0.1-42.1c-0.1-22.4-1.4-51-19.9-66.7c-15.3-13-37.9-13-56.8-12c-30.1,1.7-60,7-90.2,6.6c-28.3-0.4-56.5-0.9-84.8-0.4c-6.1,1.7-12,3.9-17.8,6.4c-8.1,7.2-15.4,15.3-20.6,25c-5.7,10.7-7.7,22.7-8.4,34.6c-0.7,12.5,0.8,25,1.3,37.5c0.5,12.8,0.6,25.7,1.8,38.5c2.2,22.9,8.4,48.1,29.8,60.2c18.5,10.4,42.1,9,62.5,8.2c31.3-1.3,62.2,1.1,93.4,2.1c25.4,0.8,51.8,0.9,75.8-8.5c11.5-4.5,21.3-11.3,28.1-21.8c6.1-9.4,7.5-21.1,7.8-32.1C390.8,312.8,388.9,301.1,388.4,289.3z M375.3,347.2c-10.3,23.5-43,27.6-65.4,28.9c-28.6,1.6-57.3-1.8-85.8-2.4c-14.7-0.3-29.5-0.1-44.2,0.5c-10.6,0.4-21.3,0.5-31.9-1c-16.4-2.3-29.7-9.6-36.5-25.2c-7.8-17.7-8.2-38.2-8.8-57.2c-0.6-18.8-3.2-38.1-1.2-56.8c2.1-19.3,12.2-34,26.4-46.2c0.3,0.2,0.6,0.4,0.9,0.5c0.6-0.4,1.3-0.7,2-1c1.7-0.7,3.4-1.1,5.2-1.4c0-0.1,0.1-0.1,0.1-0.2c0.8,0,1.6,0,2.5,0c1.4-0.1,2.8-0.1,4.1-0.1c0.2,0,0.4,0,0.5,0c27.1-0.4,54.1,0.1,81.2,0.5c30.3,0.4,60.4-5.2,90.7-6.7c18.7-1,41.9-0.3,53.1,17.2c6.9,10.8,8.2,25.4,9,37.8c0.9,14.2,0.2,28.4,0.1,42.6c-0.1,12.5,1.2,24.9,2,37.4C379.9,325.4,379.8,336.9,375.3,347.2z"></path>
            <path d="M271.7,267.4c-0.1,0-0.2-0.1-0.3-0.1c-0.8-0.3-1.5-0.7-2.2-1.1c-1.9-1-3.7-2.2-5.5-3.4c-3.9-2.5-7.6-5.2-11.6-7.6c-6.1-3.9-13.3-6.5-19.7-10c-6.6-3.7-13.2-7.7-19.9-11.3c-1.8-1-3.4-0.9-4.8-0.1c-2.2,0.7-4.2,2.5-4.2,5.5c0,26,1.8,52,3,78c0.1,2.2,1.2,3.6,2.7,4.3c1.6,1.3,3.8,1.5,5.9-0.2c9.3-7.6,19.3-14.3,29.4-20.9c5.1-3.3,10.2-6.6,15.2-9.9c4.5-3,10.2-5.9,13.5-10.1c0.8-1,1.1-2,1.2-3C278.6,275,276.4,268.3,271.7,267.4z M261.1,276.3c-2.5,1.7-5,3.4-7.5,5.1c-5,3.4-10.1,6.6-15.2,9.9c-7.2,4.7-14.4,9.5-21.4,14.6c-1-19.4-2.1-38.9-2.4-58.4c4.8,2.7,9.6,5.5,14.4,8.3c6.3,3.6,13.4,6.1,19.5,10c4.4,2.8,8.7,5.9,13.1,8.6c0.3,0.2,0.7,0.4,1,0.6C262.2,275.5,261.7,275.9,261.1,276.3z"></path>
          </svg>

          <h1 className="hidden md:block text-center text-4xl flex justify-start font-extrabold text-red-500">
            Youtube
          </h1>
        </div>
      </Link>
      <form onSubmit={submitHandler} className="flex" onClick={togleSearch}>
        <input
          type="text"
          value={search}
          onChange={changeHandler}
          className={`${
            expandSearch ? "w-10/12" : "w-20"
          } md:w-96 border focus:border-blue-700 px-4 py-2 border rounded-l-3xl`}
          placeholder="search"
        />
        <button onClick={submitHandler}>
          <div className="bg-gray-300 rounded-r-3xl self-center px-6 py-3.5">
            <AiOutlineSearch className="w-5 h-5" />
          </div>
        </button>
      </form>
      <div className={`${expandSearch ? "hidden" : "block"} md:block`}>
        {!isAuthenticated ? (
          <button
            onClick={() => loginWithRedirect()}
            className="flex space-x-2 self-center bg-white border border-black hover:border-gray-500 rounded-full px-3 py-2 text-blue-900"
          >
            <BiUserCircle className="w-7 h-7" />{" "}
            <p className="text-blue-900 font-semibold">Sign in</p>
          </button>
        ) : (
          <div className="relative">
            <img
              onClick={() => setShowLogoutBox(!showLogoutBox)}
              className="w-10 h-10 rounded-full cursor-pointer"
              src={user.picture}
              alt={user.name}
            />
            {showLogoutBox && (
              <div className="absolute top-12 right-0 bg-white border border-gray-300 rounded-lg shadow-lg px-10 pt-3 pb-2">
                <p className="w-full text-semibold">👋 {user.name}</p>
                <hr />
                <p
                  onClick={handleLogout}
                  className="text-red-500 cursor-pointer font-semibold"
                >
                  Logout
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
