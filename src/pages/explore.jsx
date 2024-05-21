import React from "react";


const Explore = () => {
return (
<>
<head>
        {/* Add your meta tags here */}
        <meta name="description" content="The Scotland Backyard Book Series follows the adventures of Jackson Shaw, a young detective in Scotland, Washington, as he unravels mysteries and battles the shadowy organization BlueHand Corporation." />
        <meta name="keywords" content="Scotland Backyard Book Series, young detective, mystery, adventure, BlueHand Corporation, Scotland, Washington, Adventure and Mystery Book Series" />
        <title>Explore Scotland Backyard Book Series by Hale Verde</title>
</head>
<div className="explore">
<h3 style={{margin:"0px"}} className="pageTitle glow sb-title heading2">
Explore Scotland Backyard
</h3>
<a
style={{width:"100%"}}
href="https://www.amazon.com/Scotland-Backyard-Knights-Hale-Verde-ebook/dp/B09NKVJTKK/ref=sr_1_1?crid=DKHA4LZM4WM0&keywords=Scotland+Backyard&qid=1679819319&sprefix=scotland+backyard%2Caps%2C143&sr=8-1"
target="_blank"
>
{/* <div className="explore-img1"></div> */}
<img src="https://jodeaux.agency/assets/img/portfolio/portfolio-23.png" className="image2" alt="" />


</a>
<p className="explore-text p1">
Scotland Backyard is a charming story, made to steep our readers in mystery and heroism. The kind
that saves the world, falls in love, reaches for personal growth and discovery for our characters.
This is the first installment, with more on the way - we sincerely hope you will love the world we
have carved out and follow the story through to its end.
</p>
</div>
<section className="news portfolio">
<h2 className="portfolioHeading glow">The Plot Thickens</h2>
<div className="newsContainer">
<div className="newsTitle">
<h2 className="portfolioTitle1"><span className="glow">Scotland, Washington</span></h2>
<p className="newsTitleContent p1">
Towering mountains frame Scotland, Washington, a town wedged between Bremerton and Poulsbo like an anomaly nestled amidst towering pines. Whispers of classified Navy projects mingle with the scent of saltwater and echoing drills, hinting at secrets buried deep within. A single road pierces the dense forests, winding like a lifeline through ancient mysteries and chilling tales whispered on the wind. This is Scotland, WA, a place where the extraordinary bleeds into the ordinary, and every shadow seems to hold a story waiting to be unearthed.
</p>
</div>
<div className="newsRight">
<img
className="portfolioImg1"
src={
"https://jodeaux.agency/assets/img/portfolio/sbtown_img-mini.png"
}
alt="newsImage"
/>
</div>
</div>


<div className="newsContainer column-reverse">
<div className="newsRight">
<img
className="portfolioImg2"
src={
"https://jodeaux.agency/assets/img/portfolio/sb_ms_img_mini.png"
}
alt="newsImage"
/>
</div>
<div className="newsTitle">
<h2 className="portfolioTitle2"><span className="glow">Scotland United Middle School</span></h2>
<p className="newsTitleContent p1">
Founded alongside the town itself, SUMS rises from the very stones of a castle built by its elder Scotsman and founder, Knox McGregor Sr. His fervent belief in his knightly lineage imbues the classrooms with an air of chivalric adventure, evident in the towering suit of gleaming plate guarding the entrance and the weathered tapestries depicting forgotten battles.
</p>
</div>
</div>


<div className="newsContainer">
<div className="newsTitle">
<h2 className="portfolioTitle3"><span className="glow">BlueHand Corporation</span></h2>
<p className="newsTitleContent p1">
BlueHand Corporation has a solid foothold over the town, founded in the 1920s - it has its hands
into everything from supplying the military, to research and development in the tech and medical industry,
advanced physics, quantum mechanics and artificial intelligence. What is its real mission? No one knows, but Jackson and Jiro
have dedicated there young lives to uncovering its atrocities and wrong-doings.
</p>
</div>
<div className="newsRight">
<img
className="portfolioImg3"
src={
"https://jodeaux.agency/assets/img/portfolio/bluehand2_img-mini.png"
}
alt="newsImage"
/>
</div>
</div>


<div className="newsContainer column-reverse">
<div className="newsRight">
<img
className="portfolioImg4"
src={
"https://jodeaux.agency/assets/img/portfolio/portfolio-46.png"
}
alt="newsImage"
/>
</div>
<div className="newsTitle">
<h2 className="portfolioTitle4"><span className="glow">The Shaw Legacy</span></h2>
<p className="newsTitleContent p1">
Jackson Shaw and his mother Clara Shaw live in the town of Scotland, Washington making a life,
day by day. Jackson, ever the sleuth and obsessed hockey player is fascinated with uncovering
all the mysteries of Scotland, Washington.
</p>
</div>
</div>


<div className="newsContainer">
<div className="newsTitle">
<h2 className="portfolioTitle5"><span className="glow">The Weirdness of Scotland</span></h2>
<p className="newsTitleContent p1">
Between the Navy's experiments and 'accidental mishaps' of BlueHand's secret labs,
the Scotland University's bolstering hyper-smart young college students and that the area
seems to attract the greatest minds from all over the world and you have yourself a formula
for what has been affectionately called "The Weirdness". Put that together with ancient groups
laying claim to the Native American ruins strown about the town, the secret societies of
would-be vampires, werewolves, immortals and yes, "The Weirdness" begins to have meaning.
</p>
</div>
<div className="newsRight">
<img
className="portfolioImg5"
src={
"https://jodeaux.agency/assets/img/portfolio/sb_weirdness_mini.png"
}
alt="newsImage"
/>
</div>
</div>
</section>
</>
);
};


export default Explore;



