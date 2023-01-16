import React from "react";

const index = () => {
  return (
    <>
      <main className="main">
        <section className="hero">
          <h3 className="heading">
            The story of best young detective in the world
          </h3>
          <div className="headerImg"></div>
        </section>
        <section className="news">
          <h2 className="newsHeading">News</h2>
          <div className="newsContainer">
            <div className="newsTitle">
              <h4 className="newsTitleHeading">Hello World</h4>
              <p className="newsTitleContent">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita fuga quo, atque corrupti dolor possimus aperiam rerum
              </p>
            </div>
            <div className="newsRight">
              <img
                className="newsRightImg"
                src={
                  "https://images.unsplash.com/photo-1497008386681-a7941f08011e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                }
                alt="newsImage"
              />
            </div>
          </div>
        </section>
        <section className="archives">
          <div className="archivesDiv">
            <h3 className="archivesTitle">Archives</h3>
            <span className="archivesText">January 2023</span>
          </div>
          <div className="archivesDiv">
            <h3 className="archivesTitle">Categories</h3>
            <span className="archivesText">Uncategorized</span>
          </div>
        </section>
      </main>
    </>
  );
};

export default index;
