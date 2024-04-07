import React from "react";

// Character Card Component
function CharacterCard({ imageSrc, title, description }) {
return (
    <div className="character-card">
    <img className="character-image" src={imageSrc} alt="character" />
    <div className="character-info">
        <h2 className="character-title glow">{title}</h2>
    <p className="character-description">{description}</p>
    </div>
    </div>
);
}

const index = () => {
return (
    <>
    <Cursor className="custom-cursor">
        <head>
          {/* Add your meta tags here */}
        <meta name="description" content="The Scotland Backyard Book Series follows the adventures of Jackson Shaw, a young detective in Scotland, Washington, as he unravels mysteries and battles the shadowy organization BlueHand Corporation." />
        <meta name="keywords" content="Scotland Backyard Book Series, young detective, mystery, adventure, BlueHand Corporation, Scotland, Washington" />
        <title>Scotland Backyard Book Series by Hale Verde</title>
        </head>
        <main className="main">
        <section className="hero">
            <h1 className="heading heading1 glow sb-title">
            SCOTLAND BACKYARD BOOK SERIES
            </h1>
            <a
            href="https://www.amazon.com/Scotland-Backyard-Knights-Hale-Verde-ebook/dp/B09NKVJTKK/ref=sr_1_1?crid=DKHA4LZM4WM0&keywords=Scotland+Backyard&qid=1679819319&sprefix=scotland+backyard%2Caps%2C143&sr=8-1"
            target="_blank"
            >
            <img src="https://jodeaux.agency/assets/img/portfolio/portfolio-20.png" className="image2" alt="" />
            </a>
        </section>
        <section className="news">
            <h2 className="newsHeading heading2 glow sb-title center-text">
            The Story of The Best Young Sleuth in the World
            </h2>
            <div className="newsContainer textBox">
            <p className="newsTitleContent p1">
                This is where the mysteries of Scotland, Washington will be
                revealed by our young heroes and the battle against the dark and
                shadowy organization of BlueHand shall be fought and won in their
                own backyard. Welcome.
            </p>
            </div>
            <h2 className="portfolioHeading heading3">Meet the Characters of Scotland Backyard</h2>

            {/* Character Cards */}
            <CharacterCard
            imageSrc="https://jodeaux.agency/assets/img/portfolio/sbtown_img-mini.png"
            title="Scotland, Washington"
            description="There exist mysterious towns and cities and then there is Scotland, Washington. Nestled in the heart of McGregor County, lies our humble city-town. Founded by the McGregor family and fashioned with a boost from the gold rush and the silver rush, little Scotland, WA quickly became big Scotland, WA helped out even more by the riches and ambitions of BlueHand Corporation, a corporation dedicated to the &quot;Benefit of All Mankind&quot;. Home to families, the Navy and Marines, it is both a place of love and expectation, but also of thrills and adventure. At some point, even the Vikings may have called it home. Surrounded by mountains, bounded by the shores of the Pacific Ocean and nested within the ethos of the Pacific NorthWest, USA."
            />
            <CharacterCard
            imageSrc="https://jodeaux.agency/assets/img/portfolio/portfolio-21.png"
            title="Jackson Shaw - The Great Detective"
            description="Hero? Detective? Center for Scotland United? His destiny is as mysterious as his abilities. Jackson is dedicated, truly dedicated to solving his cases, finding his lost father, protecting his mother and his friends. Jackson Shaw - &quot;solve the problem&quot; - is he up to the tasks he will be confronted with. You...our readers...shall see."
            />
            {/* Add similar CharacterCard components for remaining characters */}

        </section>
        <section className="archives">
            <div className="archivesDiv">
            <h3 className="archivesTitle">More to Come</h3>
            <span className="archivesText heading3">
                2nd Volume in the Works - Q1 2024
            </span>
            </div>
        </section>
        </main>
        </Cursor>
        </>
)}