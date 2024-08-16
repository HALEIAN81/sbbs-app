import React, { useState, useEffect } from "react";

function Blog() {
  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    fetch("blogPost2.json")
      .then((response) => response.json())
      .then((data) => setBlogPost(data[1])); // Access the first post
  }, []);

  return (
    <div className="blog-section">
      {blogPost2 && (
        <>
          <h2 className="blog-title" style={{ color: "white" }}>
            {blogPost2.title}
          </h2>
          <img src={blogPost2.image} alt={blogPost2.title} />
          <p className="blog-description">{blogPost.description}</p>
          <p className="blog-content1">{blogPost2.content1}</p>
          <p className="blog-content2">{blogPost2.content2}</p>
          <p className="blog-content3">{blogPost2.content3}</p>
          <p className="blog-content4">{blogPost2.content4}</p>
        </>
      )}
    </div>
  );
}

export default Blog;
