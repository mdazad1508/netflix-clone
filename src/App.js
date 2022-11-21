import React, { useEffect } from "react";
import "./App.css";
import { HomeScreen } from "./screens/HomeScreen";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "./NotFound";
import { LoginScreen } from "./screens/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./features/counter/userSlice";
import { Profile } from "./Profile";
import { Movie } from "./Movie";

function App() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((AuthUser) => {
      if (AuthUser) {
        dispatch(login(AuthUser.email));
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Routes>
        {!user && <Route path="/" element={<LoginScreen />}></Route>}
        {user && <Route path="/" exact element={<HomeScreen />}></Route>}
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/movie" element={<Movie />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;

//link:https://netflix-clone-5ceb8.web.app/
