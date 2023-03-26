import React, { useState } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import "./App.css";
import Hero from "./components/Hero/Hero";

const App = () => {
  const [users, setUsers] = useState();
  return (
    <>
      <Hero />
      {/* {users ? (
        <div>welcome to the UI dashboard</div>
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
