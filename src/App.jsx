import React, { useState } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import "./App.css";
import LandingPage from "./Pages/LandingPage";

const App = () => {
  const [users, setUsers] = useState();
  return (
    <>
      {/* <LandingPage /> */}
      {users ? (
        <div>welcome to the UI dashboard</div>
      ) : (
        <>
          <SignIn setUsers={setUsers} />
          <SignUp />
        </>
      )}
    </>
  );
};

export default App;
