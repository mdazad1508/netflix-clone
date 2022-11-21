import React from "react";
import "./Profile.css";
import { Nav } from "./Nav";
import { useSelector } from "react-redux";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  const LogoutHandler = () => {
    auth.signOut();
    navigate("/");
  };
  return (
    <div className="profile">
      <Nav />
      <div className="profile__body">
        <h1>Edit profile</h1>
        <div className="profile__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profile__details">
            <h2>{user}</h2>
            <div className="profile__plans">
              <h3>Plans</h3>
              <div className="plans__details">
                <h3>Renewal Date: 04/03/2021</h3>
                <div className="plans__details__more">
                  <div className="plans__subdetails">
                    <div>
                      <h4>Netflix Standard</h4>
                      <p>1080P</p>
                    </div>
                    <button>Subscribe</button>
                  </div>
                  <div className="plans__subdetails">
                    <div>
                      <h4>Netflix Basics</h4>
                      <p>480P</p>
                    </div>
                    <button>Subscribe</button>
                  </div>
                  <div className="plans__subdetails">
                    <div>
                      <h4>Netflix Premium</h4>
                      <p>4K-HDR</p>
                    </div>
                    <button
                      className="plans__current"
                      style={{ backgroundColor: "gray" }}
                    >
                      Current Package
                    </button>
                  </div>
                </div>
              </div>
              <button className="profile__button" onClick={LogoutHandler}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
