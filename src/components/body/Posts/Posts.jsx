import React from "react";
import { useLoaderData } from "react-router";
import Post from "../Post/Post";

const Posts = () => {
  const posts = useLoaderData();

  return (
    <div className="w-7/10 p-10 text-center my-auto">
      <h2 className="text-2xl font-bold">This is Posts:</h2>
      {posts.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </div>
  );
};

export default Posts;
