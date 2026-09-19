import React from "react";
import { useLoaderData } from "react-router";
import User from "../User/User";

const Users = () => {
  const users = useLoaderData();
  // console.log(users);

  return (
    <div className="w-7/10 p-10 text-center my-auto">
      <h2>This is Users Data:</h2>
      {users.map((user) => (
        <User key={user.id} user={user}></User>
      ))}
    </div>
  );
};

export default Users;
