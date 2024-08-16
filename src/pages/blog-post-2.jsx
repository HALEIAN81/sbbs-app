import React, { useState, useEffect } from "react"; // Import react and hooks

function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);

  // Fetch data from JSON file (replace with your actual fetch logic)
  useEffect(() => {
    fetch("blogPost2.json")
      .then((response) => response.json())
      .then((data) => setBlogPosts(data));
  }, []);

  return (
    <div className="blog-section" key={index}>
      <h2 className="blog-title" style={{ color: "white" }}>
        {post.title}
      </h2>
      <img src={post.image} alt={post.title} />
      <p className="blog-description">{post.description}</p>
      <p className="blog-content1">{post.content1}</p>
      <p className="blog-content2">{post.content2}</p>
      <p className="blog-content3">{post.content3}</p>
      <p className="blog-content4">{post.content4}</p>
    </div>
  );
}

export default BlogPost;
