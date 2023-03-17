import React from "react";

const index = () => {
  return (
    <>
      <main className="main">
        <section className="hero">
          <h1 className="heading glow sb-title">
          SCOTLAND BACKYARD BOOK SERIES
          </h1>
          <div className="headerImg"></div>
        </section>
        <section className="news">
          <h2 className="newsHeading glow sb-title">The Story of The Best Young Sleuth in the World</h2>
          <div className="newsContainer">
            <div className="newsTitle">
              <p className="newsTitleContent">
                Welcome. This is where the mysteries of Scotland, Washington will be revealed by our young heroes and
                the battle against the dark and shadowy organization of BlueHand shall be fought and won in our own backyard.
              </p>
              <p className="newsTitleContent">Welcome to Scotland Backyard.</p>
            </div>
            {/* <div className="newsRight">
              <img
                className="newsRightImg"
                src={
                  "https://images.unsplash.com/photo-1497008386681-a7941f08011e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                }
                alt="newsImage"
              />
            </div> */}
          </div>
        </section>
        <section className="archives">
          <div className="archivesDiv">
            <h3 className="archivesTitle">More to Come</h3>
            <span className="archivesText">2nd Volume in the Works - Q3/Q4 2023</span>
          </div>
          <div className="archivesDiv">
            <h3 className="archivesTitle">Email the author</h3>
            <span className="archivesText">SBBS.online</span>
          </div>
        </section>
      </main>
    </>
  );
};

export default index;
