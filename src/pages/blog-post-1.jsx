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
          <p className="blog-content1">{post.content1}</p>
          <p className="blog-content2">{post.content2}</p>
          <p className="blog-content3">{post.content3}</p>
          <p className="blog-content4">{post.content4}</p>
        </div>
      ))}
    </div>
  );
}

export default Blog;
