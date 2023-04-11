import React from "react";

const Author = () => {
  return (
    <div className="author">
      <h3 className="pageTitle sb-title glow">Meet the Author - Hale Verde</h3>
      <div className="authorImg"></div>
      <p className="p-quote glow">
        "I believe, life itself is the greatest mystery - but to add our own unique experiences and creative endeavors is to uncover that mystery every day."  
      </p>
      <p className="p-author glow">- Hale Verde</p>
      <p className="story-summary">
        The story of Jackson, Jira and Melissa is a budding story of individual heroism, dedication and the 
        depthness of character even in the world of fiction. I hope that those that read our book and those that follow
        can share in that journey and make it their own. BlueHand is a mysterious force and as we work through the series
        I hope that our readers will discover a love for that 'unwinding' of their mystery and learn more about Scotland, 
        Washington and as such - Scotland Backyard.
      </p>
      <p className="next-book">
        Please look out for <span>Scotland Backyard - Volume II - The Warlock's Cabal</span> coming out Q3 2023 on Amazon. 
      </p>
      <p className="thanks">
        Thank you all for supporting this journey.
      </p>
    </div>
  );
};

export default Author;
