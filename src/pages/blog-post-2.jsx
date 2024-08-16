import React, { useState, useEffect } from "react"; // Import react and hooks

function BlogPost() {
  const [selectedPost, setSelectedPost] = useState(null); // State variable for post data

  // Fetch data from JSON file (replace with your actual fetch logic)
  useEffect(() => {
    fetch("blogPost.json")
      .then((response) => response.json())
      .then((data) => setSelectedPost(data[0])); // Assuming first post in JSON
  }, []); // Empty dependency array ensures data is fetched only once

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
      )}
    </div>
  );
}

export default BlogPost;
