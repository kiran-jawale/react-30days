import React from "react";
import { useState } from "react";

export default function Day4() {
  const [formData, setFormData] = useState({
    title: "",
    owner: "",
  });

  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: "Title 1",
      owner: "One",
      timing: {
        date: new Date().getDate(),
        day: new Date().getDay(),
        time: new Date().getTime(),
      },
    },
    {
      id: Math.random(),
      title: "Title 2",
      owner: "Two",
      timing: {
        date: new Date().getDate(),
        day: new Date().getDay(),
        time: new Date().getTime(),
      },
    },
    {
      id: Math.random(),
      title: "Title 3",
      owner: "Three",
      timing: {
        date: new Date().getDate(),
        day: new Date().getDay(),
        time: new Date().getTime(),
      },
    },
  ]);

  const handleChange = (target) => {
    const { name, value } = target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Math.random(),
      title: formData.title,
      owner: formData.owner,
      timing: {
        date: new Date().getDate(),
        day: new Date().getDay,
        time: new Date().getTime(),
      },
    };
    setPosts((prev) => [...prev, newPost]);
    setFormData({ title: "", owner: "" });
  };

  function deletePost(id) {
    setPosts((prev) => prev.filter((post) => post.id !== id ))
  }

  return (
    <div className="bg-zinc-800 flex flex-col items-center justify-center h-screen gap-2 text-white">
      <div>
        <form className="w-full flex flex-row gap-2" onSubmit={handleSubmit}>
          <input
            value={formData.title}
            name="title"
            type="text"
            onChange={(e) => handleChange(e.target)}
            className="text-black"
            placeholder="Enter Title"
          />
          <input
            value={formData.owner}
            name="owner"
            type="text"
            onChange={(e) => handleChange(e.target)}
            className="text-black"
            placeholder="Enter Name"
          />
          <button type="submit" className="bg-green-600 rounded-lg">
            ADD
          </button>
        </form>
      </div>
      <ul className="list-none flex flex-col gap-2 items-center justify-center">
        {posts &&
          posts.map((post) => (
            <li key={post.id} className="font-sans font-semibold">
              <h6>{post.title}</h6>
              <b>{post.owner}</b>
              <p>Day: {post.timing.day}</p>
              <p>Date: {post.timing.date}</p>
              <p>Time: {post.timing.time}</p>
              <button className="bg-green-600 rounded-lg" onClick={() => deletePost(post.id)}>DELETE</button>
            </li>
          ))}
      </ul>
    </div>
  );
}
