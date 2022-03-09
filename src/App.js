import React, { useState } from "react";
import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UserList.jsx";

function App() {
  const [userList, setUserList] = useState([]);
  const adduserList = (user) => {
    setUserList((prevValue) => [user, ...prevValue]);
  };
  return (
    <div>
      <AddUser onAddUser={adduserList} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
