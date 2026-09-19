import React from "react";
import { Link, useNavigate } from "react-router";

const Post = ({ post }) => {
  const { id, title } = post;

  // another way to show UserDetails by Details-btn-2  using:(Navigate)
  const naviget = useNavigate();

  const handleNavigate = () => {
    naviget(`/posts/${id}`);
  };

  return (
    <div className="border flex flex-col rounded-2xl p-4 my-3">
      <span className="text-green-800">Title:</span> {title}
      <div className="flex items-center gap-3 justify-center">
        {/* ----Details-btn-1----- */}
        <Link to={`/posts/${id}`}>
          <button className="btn btn-primary mt-3">See more</button>
        </Link>
        {/* ----Details-btn-2----- */}
        <button onClick={handleNavigate} className="btn mt-3 btn-secondary">
          Details of {id}
        </button>
      </div>
    </div>
  );
};

export default Post;
