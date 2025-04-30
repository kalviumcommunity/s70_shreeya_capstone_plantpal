import React from "react";
import Post from '../components/Post'


const dummyPosts = [
  {
    id: 1,
    username: "PlantLover123",
    title: "Help! My fern is dying",
    content: "Anyone have tips for reviving an overwatered fern? 🍃",
    datePosted: "April 25, 2025",
  },
  {
    id: 2,
    username: "CactusQueen",
    title: "Best soil for succulents?",
    content: "What soil mix do you use for your indoor succulents? 🌵",
    datePosted: "April 26, 2025",
  },
];


const Community = () => {
  return (
    <div className="min-h-screen bg-green-50 py-10 px-6">
      <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">Community Garden 💬</h2>
      <div className="space-y-6 max-w-3xl mx-auto">


        {dummyPosts.map((post) => (
          <Post
            key={post.id}{...post}
          />
        ))}
      </div>
    </div>
  );
};


export default Community;
