import React from "react";
import { useLoaderData } from "react-router";

const UserDetails = () => {
  const user = useLoaderData();

  const { website, name } = user;
  //   console.log(user);
  return (
    <div className="w-7/10 p-10 text-xl text-center my-auto">
      <h2>This is UserDetails</h2>
      <h2 className="font-bold mt-10 text-3xl text-green-800">Name: {name}</h2>
      <p className=" text-green-800">Website: {website}</p>
    </div>
  );
};

export default UserDetails;
