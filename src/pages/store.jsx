import React from "react";

const Store = () => {
  return (
    <>
      {/* Move meta tags to a separate component or the document head */}
      <div className="store glow">
        <h3 className="pageTitle">Store</h3>
        <div id="news-card" className="card card-with-background">
          <div className="card-body" style={{
            backgroundImage: "url('https://jodeaux.agency/assets/img/portfolio/bg_gradient_sb.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
            <a
              style={{ width: "100%" }}
              href="https://www.amazon.com/Scotland-Backyard-Knights-Hale-Verde-ebook/dp/B09NKVJTKK/ref=sr_1_1?crid=DKHA4LZM4WM0&keywords=Scotland+Backyard&qid=1679819319&sprefix=scotland+backyard%2Caps%2C143&sr=8-1"
              target="_blank"
            >
              <img
                id="news-image"
                className="card-img-top"
                src="https://jodeaux.agency/assets/img/portfolio/portfolio-26.png"
                alt="Scotland Backyard - Volume I: The Knights' Array"
              />
            </a>
            <div className="card-text">
              <h2 className="card-title">
                <span className="glow">Scotland Backyard - Volume I: The Knights' Array</span>
              </h2>
              <p className="card-content">
                Introducing Scotland Backyard - The Knights Array - Volume I of a new children's mystery series. As the stories of Scotland Backyard unfold, we hope you will join our young brave investigators as they unlock the mysteries of their small town, save lives, play hockey and experience both joy and terror. What waits inside this deep labyrinth of tales will shake the foundation of their world forever.
              </p>
            </div>
          </div>
        </div>
        <p className="store-text heading3">
          Please celebrate with us as a new tale of adventure, mystery and action unfolds.
        </p>
      </div>
    </>
  );
};

export default Store;
