import React, { useState, useEffect } from "react";

function Blog() {
  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    fetch("blogPost.json")
      .then((response) => response.json())
      .then((data) => setBlogPost(data[0])); // Access the first post
  }, []);

  return (
    <div className="blog-section">
      {blogPost && (
        <>
          <h2 className="blog-title" style={{ color: "white" }}>
            {blogPost.title}
          </h2>
          <img
            className="blog-image"
            src={blogPost.image}
            alt={blogPost.title}
          />
          <p className="blog-description">{blogPost.description}</p>
          <p className="blog-content1">{blogPost.content1}</p>
          <p className="blog-content2">{blogPost.content2}</p>
          <p className="blog-content3">{blogPost.content3}</p>
          <p className="blog-content4">{blogPost.content4}</p>
        </>
      )}
    </div>
  );
}

export default Blog;
