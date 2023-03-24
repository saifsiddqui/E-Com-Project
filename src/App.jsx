import React, { useState } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const App = () => {
  const [users, setUsers] = useState();
  return (
    <>
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
