import React, { use } from "react";

const Users2 = ({ users2Promise }) => {
  const users = use(users2Promise);
  console.log("Users2 data:", users);
  return <div>hi</div>;
};

export default Users2;
