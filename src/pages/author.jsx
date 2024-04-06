import React from "react";

const Author = () => {
  return (
    <>
    <head>
        {/* Add your meta tags here */}
        <meta name="description" content="The Scotland Backyard Book Series follows the adventures of Jackson Shaw, a young detective in Scotland, Washington, as he unravels mysteries and battles the shadowy organization BlueHand Corporation." />
        <meta name="keywords" content="Scotland Backyard Book Series, young detective, mystery, adventure, BlueHand Corporation, Scotland, Washington, Author - Hale Verde" />
        <title>Meet the Author of Scotland Backyard Book Series | Hale Verde</title>
</head>
    <div className="author">
      <h3 className="pageTitle sb-title glow heading2">Meet the Author</h3>
      {/* <div className="authorImg"></div> */}
      <img src="https://jodeaux.agency/assets/img/portfolio/portfolio-18.png" className="image1" alt="" />

      <p className="p-quote glow heading2">
        "I believe, life itself is the greatest mystery - but to add our own unique experiences and creative endeavors is to uncover that mystery every day."  
      </p>
      <p className="p-author glow heading2">- Hale Verde</p>
      <p className="story-summary p1">
        The story of Jackson, Jira and Melissa is a budding story of individual heroism, unwavering dedication and the 
        depth of character even in the world of fiction.</p>
        <p className="story-summary p1">I hope that those that read our book and those that follow
        can be captivated by their journey sharing in their triumphs and unraveling the captivating enigma of BlueHand.
        I hope that our readers will discover a love for that 'unwinding' of their mystery and learn more about Scotland, Washington and as such - Scotland Backyard.</p>
      <p className="next-book  ">
        Please look out for <span>Scotland Backyard - Volume II - The Warlock's Cabal</span> coming out Q1 2024 on Amazon and other sellers.
      </p>
      <p className="thanks">
        Thank you all for supporting this journey.
      </p>
      <p className="story-summary p1">
        You can email the author at haleverde2020@gmail.com <span className="glow">:)</span>
      </p>
    </div>
    </>
  );
};

export default Author;
