import React, { Suspense, useState } from "react";
import { Link } from "react-router";
import UserDetails2 from "../UserDetails2/UserDetails2";

const User = ({ user }) => {
  const { id, name, email, phone } = user;

  // load data in the component  ---for spacial case
  const [showInfo, setShowInfo] = useState(false);

  const userPromise = fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  ).then((res) => res.json());

  return (
    <div className="border rounded-2xl p-4 text-center my-4 space-y-2">
      <h2 className="font-bold text-2xl">{name}</h2>
      <p>email: {email}</p>
      <p>phone: {phone}</p>
      <div className="space-x-3">
        <Link to={`/users/${id}`}>Show Details</Link>

        {/* load data in the component  ---for spacial case */}
        <button
          onClick={() => setShowInfo(!showInfo)}
          className="btn btn-secondary"
        >
          {showInfo ? "hide" : "show"} Info
        </button>
        {showInfo && (
          <Suspense fallback={<span>Loading....</span>}>
            <UserDetails2 userPromise={userPromise}></UserDetails2>
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default User;
