import React, { useState, useEffect } from "react";
function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  useEffect(() => {
    fetch("blogData.json")
      .then((response) => response.json())
      .then((data) => setBlogPosts(data));
  }, []);
  return (
    <div>
      {" "}
      {blogPosts.map((post, index) => (
        <div key={index}>
          {" "}
          <h2>{post.title}</h2> <img src={post.image} alt={post.title} />{" "}
          <p>{post.content}</p>{" "}
        </div>
      ))}{" "}
    </div>
  );
}
export default Blog;
