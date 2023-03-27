import React, { useState } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import { useSelector } from "react-redux";

const App = () => {
  const [users, setUsers] = useState();
  const email = useSelector((state) => state.user.userEmail);
  return (
    <>
      <LandingPage />
      {/* {users ? (
        <div>welcome to the UI dashboard {email}</div>
      ) : (
        <>
          <SignIn setUsers={setUsers} />
          <SignUp />
        </>
      )} */}
    </>
  );
};

export default App;
