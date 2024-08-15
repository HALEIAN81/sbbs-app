import React from "react";

const Author = () => {
  return (
    <>
      <head>
        {/* Add your meta tags here */}
        <meta
          name="description"
          content="The Scotland Backyard Book Series follows the adventures of Jackson Shaw, a young detective in Scotland, Washington, as he unravels mysteries and battles the shadowy organization BlueHand Corporation."
        />
        <meta
          name="keywords"
          content="Scotland Backyard Book Series, young detective, mystery, adventure, BlueHand Corporation, Scotland, Washington, Author - Hale Verde"
        />
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
        <title>
          Meet the Author of Scotland Backyard Book Series | Hale Verde
        </title>
      </head>
      <div className="author">
        <h3 className="pageTitle sb-title glow heading2">Meet the Author</h3>
        {/* <div className="authorImg"></div> */}
        <img
          src="https://jodeaux.agency/assets/img/portfolio/portfolio-18.png"
          className="image1"
          alt="Hale Verde the author standing with his three children"
        />

        <p className="story-summary p1">
          Meet Hale Verde - a multi-talented individual with a passion for
          making a difference. By day, he's a dedicated physician, caring for
          patients with unwavering commitment. By night, he's a skilled software
          engineer, crafting code with precision and creativity. Yet, his
          talents don't end there.
        </p>
        <p className="story-summary p1">
          In his free time, Hale is an avid aquascaper, creating intricate
          underwater worlds. He's also a game developer, weaving immersive
          stores through his video game creations. As a 3D artist, he sculpts
          breaktaking realms, bringing his imagination to life. And his passion
          for storytelling extends to his children's books, including the
          enchanting tale,{" "}
          <span className="glow">The Little Robot That Could</span> (available
          on Amazon.)
        </p>

        <p className="story-summary p1">
          Hale's dedication to making a positive impact is evident in both his
          professional and personal life. He's committed to inspiring others,
          especially his three remarkable children, who are following in his
          footsteps as budding creatives. Together, they're shaping a future
          filled with innovation, curiosity, and endless possibilities.
        </p>
        <p className="story-summary p1">
          The Scotland Backyard Book Series is just the beginning of a magical
          journey, where individual heroism and unwavering determination take
          center stage. Through the captivating adventures of Jackson, Jiro and
          Melissa, readers will be swept away by their triumphs and the gripping
          enigma of BlueHand. Discover the allure of Scotland, Washington, and
          immerse yourself in the{" "}
          <span className="glow">Scotland Backyard Universe</span>, where
          mysteries are unraveled and imaginations soar.
        </p>
        <p className="p-quote glow heading2">
          "I believe, life itself is the greatest mystery - but to add our own
          unique experiences and creative endeavors is to uncover that mystery
          every day."
        </p>
        <p className="p-author glow heading2" style={{ marginBottom: "50px" }}>
          - Hale Verde
        </p>
        <p className="next-book  ">
          Please look out for <span>Scotland Backyard - Volume III - TBD </span>{" "}
          coming out Q3 2024 on Amazon and other sellers.
        </p>
        <p className="thanks">Thank you all for supporting this journey.</p>
        <p className="story-summary p1">
          You can email the author at haleverde2020@gmail.com{" "}
          <span className="glow">:)</span>
        </p>
      </div>
    </>
  );
};

export default Author;
