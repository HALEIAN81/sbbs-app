import React, { useState, useEffect } from "react";

function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetch("blogData.json")
      .then((response) => response.json())
      .then((data) => setBlogPosts(data));
  }, []);

  const BlogLink = ({ url, children }) => {
    return <a href={url}>{children}</a>;
  };

  return (
    <div>
      {blogPosts.map((post, index) => (
        <div className="blog-section" key={index}>
          <h2 className="blog-title" style={{ color: "white" }}>
            {post.title}
          </h2>
          <img src={post.image} alt={post.title} />
          <p className="blog-description">{post.description}</p>
          <a href={post.url}>
            {" "}
            {/* Replace with your URL variable */}
            <button className="read-more-button">Read This Post</button>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Blog;
