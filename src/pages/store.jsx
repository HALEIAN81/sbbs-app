import React from "react";

const Store = () => {
  return (
    <>
      {/* Move meta tags to a separate component or the document head */}
      <div className="store">
        <h3 className="pageTitle glow">Store</h3>
        <h2
          className="glow"
          style={{ marginTop: "20px", marginBottom: "30px" }}
        >
          Hale Verde's Thrilling Tales
        </h2>

        <p>
          Welcome to the official store of Hale Verde, a place where you can
          explore the enchanting worlds created by this imaginative author. Dive
          into the mysteries of Scotland Backyard and discover the heartwarming
          story of The Little Robot That Could.
        </p>
        <div id="news-card" className="card card-with-background">
          <div
            className="card-body"
            style={{
              backgroundImage:
                "url('https://jodeaux.agency/assets/img/portfolio/bg_gradient_sb.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
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
                <span className="glow">
                  Scotland Backyard - Volume I: The Knights' Array
                </span>
              </h2>
              <p className="card-content">
                Introducing Scotland Backyard - The Knights Array - Volume I of
                a new children's mystery series. As the stories of Scotland
                Backyard unfold, we hope you will join our young brave
                investigators as they unlock the mysteries of their small town,
                save lives, play hockey and experience both joy and terror. What
                waits inside this deep labyrinth of tales will shake the
                foundation of their world forever.
              </p>
            </div>
          </div>
        </div>

        <p className="store-text heading3">
          The wait is over! Hale's newest adventure explodes onto the scene!
          Prepare for a thrilling tale of mystery and action.
        </p>
        <div id="news-card" className="card card-with-background">
          <div
            className="card-body"
            style={{
              backgroundImage:
                "url('https://jodeaux.agency/assets/img/portfolio/bg_gradient_sbII_mini.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <a
              style={{ width: "100%" }}
              href="https://www.amazon.com/gp/product/B0D32DP5CF?ref_=dbs_p_pwh_rwt_cpsb_cl_1&storeType=ebooks"
              target="_blank"
            >
              <img
                id="news-image"
                className="card-img-top"
                src="https://jodeaux.agency/assets/img/portfolio/sb_coverII_mini.png"
                alt="Scotland Backyard - Volume II: The Warlock's Cabal"
              />
            </a>
            <div className="card-text">
              <h2 className="card-title">
                <span className="glow">
                  Scotland Backyard - Volume II: The Warlock's Cabal
                </span>
              </h2>
              <p className="card-content">
                The winds of change howl across Scotland, Washington. In the
                thrilling sequel, Detective Shaw finds himself at the eye of a
                storm. A coveted amulet, whispered to hold the key to the town's
                – and perhaps the world's – future, has ignited a ferocious
                struggle. From the shadows emerge new and ruthless foes, each
                with their own designs on the prize. Can Shaw navigate this
                treacherous web of adversaries, safeguarding the amulet while
                protecting Jiro, Melissa, and the entire town caught in the
                crossfire? The fate of their future hangs in the balance.
              </p>
            </div>
          </div>
        </div>

        <p className="store-text heading3">
          Other published works by Hale Verde:
        </p>
        <div id="news-card" className="card card-with-background">
          <div
            className="card-body"
            style={{
              backgroundImage:
                "url('https://jodeaux.agency/assets/img/portfolio/bg_gradient_sbII_mini.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <a
              style={{ width: "100%" }}
              href="https://www.amazon.com/Little-Robot-That-Could-Friends-ebook/dp/B07HYCHM37/ref=sr_1_1?crid=3HJDGN0WGNTKY&dib=eyJ2IjoiMSJ9.YMoLvmEkyqvN0xBsWh6TeJN2LyDuAaFPue1as14Lg0R8gsgy2HN4IJ31LgDtdVgJf9NKC6N1hbTZwo2s_tMiDMoI1w1s8vukDiRj8-dpfo_7ooFY0UZIh6i_zPXzBsaAfm12u5hL3gwoeCi2m5M0VR-0OjNSOk7c79oR1osJ203dMormCMCjxRg0LrR0mUCKMI-QQ_MXBGCHZU9TGXZR3BZxl4QRtQSBBp7yfJhv4N4.pg0Egp0KPaL4ymTbcP1u5Z0jXvJbT2a6IOcJ9YXZtLo&dib_tag=se&keywords=The+Little+Robot+That+Could&qid=1716322706&sprefix=the+little+robot+that+could%2Caps%2C182&sr=8-1"
              target="_blank"
            >
              <img
                id="news-image"
                className="card-img-top"
                src="https://jodeaux.agency/assets/img/portfolio/LRTC_cover_mini.png"
                alt="The Little Robot That Could by Kam Vivi Verde, Hale Verde"
              />
            </a>
            <div className="card-text">
              <h2 className="card-title">
                <span className="glow">The Little Robot That Could</span>
              </h2>
              <p className="card-content">
                Embark on a thrilling journey with Jetz! A seemingly small
                adventure could lead to a life-changing discovery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
