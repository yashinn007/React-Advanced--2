import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const PostDetails = () => {
  const post = useLoaderData();

  // Go back by Go-back-btn  using:(Navigate)
  const naviget = useNavigate();

  return (
    <div className="w-7/10 p-10 text-center my-auto">
      <h2>
        <span className="text-green-800">Title: </span>
        {post.title}
      </h2>
      <p>
        <span className="text-green-800">Descripshon: </span> {post.title}
      </p>
      {/* Go-back btn */}
      <button onClick={() => naviget(-1)} className="mt-3 btn btn-secondary">
        Go Back
      </button>
    </div>
  );
};

export default PostDetails;
