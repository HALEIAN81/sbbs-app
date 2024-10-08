const About = () => {
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
          content="Scotland Backyard Book Series, young detective, mystery, adventure, BlueHand Corporation, Scotland, Washington, Adventure and Mystery Book Series"
        />
        <title>About Scotland Backyard Book Series by Hale Verde</title>
        <meta
          property="og:title"
          content="Scotland Backyard Book Series: The Adventures of Young Detective Jackson Shaw"
        />
        <meta
          property="og:description"
          content="The Scotland Backyard Book Series follows the adventures of Jackson Shaw, a young detective in Scotland, Washington, as he unravels mysteries and battles the shadowy organization BlueHand Corporation."
        />
        <meta property="og:url" content="https://sbbs.online/about" />{" "}
        <meta property="og:type" content="website" />{" "}
        <meta
          property="og:image"
          content="https://jodeaux.agency/assets/img/portfolio/portfolio-20.png"
        />
      </head>
      <div className="about glow">
        <h3
          style={{ margin: "0px 0px 30px 0px" }}
          className="pageTitle  sb-title heading2"
        >
          About Scotland Backyard Book Series Online
        </h3>
        <div>
          <a
            style={{ width: "100%" }}
            href="https://www.amazon.com/Scotland-Backyard-Knights-Hale-Verde-ebook/dp/B09NKVJTKK/ref=sr_1_1?crid=DKHA4LZM4WM0&keywords=Scotland+Backyard&qid=1679819319&sprefix=scotland+backyard%2Caps%2C143&sr=8-1"
            target="_blank"
          >
            {/* <div className="about-img1"></div> */}
            <img
              src="https://jodeaux.agency/assets/img/portfolio/one_road_image_mini.png"
              className="image-about"
              alt="Image of The One Road Headed into The Weirdness of Scotland, Washington"
            />
          </a>
        </div>
        <p className="about-text heading2">
          Here, we gather a collection of 3d works to showcase the hidden world
          of Scotland Backyard.
        </p>
        <p className="about-text heading2">
          We have a great deal in the works, stay tuned.
        </p>
      </div>
    </>
  );
};

export default About;
