import React from "react";

const Author = () => {
  return (
    <>
    <head>
        {/* Add your meta tags here */}
        <meta name="description" content="The Scotland Backyard Book Series follows the adventures of Jackson Shaw, a young detective in Scotland, Washington, as he unravels mysteries and battles the shadowy organization BlueHand Corporation." />
        <meta name="keywords" content="Scotland Backyard Book Series, young detective, mystery, adventure, BlueHand Corporation, Scotland, Washington, Author - Hale Verde" />
        <meta
          property="og:title"
          content="Scotland Backyard Book Series: The Adventures of Young Detective Jackson Shaw"
        />
        <meta
          property="og:description"
          content="The Scotland Backyard Book Series follows the adventures of Jackson Shaw, a young detective in Scotland, Washington, as he unravels mysteries and battles the shadowy organization BlueHand Corporation."
        />
        <meta property="og:url" content="https://sbbs.online/author" />{" "}
        <meta property="og:type" content="website" />{" "}
        <meta
          property="og:image"
          content="https://jodeaux.agency/assets/img/portfolio/portfolio-20.png"
        />
        <title>Meet the Author of Scotland Backyard Book Series | Hale Verde</title>
</head>
    <div className="author">
      <h3 className="pageTitle sb-title glow heading2">Meet the Author</h3>
      {/* <div className="authorImg"></div> */}
      <img src="https://jodeaux.agency/assets/img/portfolio/portfolio-18.png" className="image1" alt="Hale Verde the author standing with his three children" />

      <p className="p-quote glow heading2">
        "I believe, life itself is the greatest mystery - but to add our own unique experiences and creative endeavors is to uncover that mystery every day."  
      </p>
      <p className="p-author glow heading2">- Hale Verde</p>
      <p className="story-summary p1">
      Hale Verde wears many hats – a physician by day, a software engineer by night, and a creative mind at all hours. When he's not tending to patients or crafting code, you can find him engrossed in aquascaping, crafting video games, or sculpting worlds in 3D art. He's also a published author, weaving enchanting tales for children (check out "The Little Robot That Could" on Amazon!).  Hale's passion extends beyond his hobbies – he's dedicated to making a positive impact on the world, one project at a time.  And with his three amazing children by his side, he's fostering a new generation of creative minds ready to shape their own destinies.  The Scotland Backyard Series is just the beginning of many adventures to come!
      </p>
      <p className="story-summary p1">
        The story of Jackson, Jira and Melissa is a budding story of individual heroism, unwavering dedication and the 
        depth of character even in the world of fiction.
      </p>
        <p className="story-summary p1">I hope that those that read this book and those that follow
        can be captivated by their journey sharing in their triumphs and unraveling the captivating enigma of BlueHand.
        I hope that our readers will discover a love for that 'unwinding' of their mystery and learn more about Scotland, Washington and as such - Scotland Backyard.
      </p>
      <p className="next-book  ">
        Please look out for <span>Scotland Backyard - Volume III - TBD </span> coming out Q3 2024 on Amazon and other sellers.
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
