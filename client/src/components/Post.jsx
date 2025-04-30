import React from "react";

const PostCard = ({ username, title, content, datePosted }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold text-green-800">{username}</h2>
        <span className="text-sm text-gray-400">{datePosted}</span>
      </div>
      <h3 className="text-xl font-bold text-green-700 mb-2">{title}</h3>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default PostCard;
