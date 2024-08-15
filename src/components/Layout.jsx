import Link from "next/link";
import React, { useState } from "react";
import hamburgerIcon from "../images/hamburger.png";

const Header = () => {
  const [first, setfirst] = useState("none");
  const handleMunuIcon = () => {
    first == "none" ? setfirst("block") : setfirst("none");
  };
  return (
    <header className="header">
      <div className="nav">
        <div className="logo">
          <Link onClick={() => setfirst("none")} className="logoLink" href="/">
            Scotland Backyard Book Series
          </Link>
        </div>
        <div className="navbar">
          <Link className="navbarLink" href="/author">
            Author
          </Link>
          <Link className="navbarLink" href="/explore">
            Explore
          </Link>
          <Link className="navbarLink" href="/store">
            Store
          </Link>
          <Link className="navbarLink" href="/blog">
            Blog
          </Link>
        </div>
        <div className="mobilemenu">
          <img
            onClick={handleMunuIcon}
            className="hemburguricon"
            src={hamburgerIcon.src}
          />

          <div style={{ display: first }} className="hemburgurIconBox">
            <Link
              onClick={() => setfirst("none")}
              className="navbarLink"
              href="/author"
            >
              Author
            </Link>
            <Link
              onClick={() => setfirst("none")}
              className="navbarLink"
              href="/explore"
            >
              Explore
            </Link>
            <Link
              onClick={() => setfirst("none")}
              className="navbarLink"
              href="/store"
            >
              Store
            </Link>
            {/* <Link
              onClick={() => setfirst("none")}
              className="navbarLink"
              href="/blog"
            >
              Blog
            </Link> */}
          </div>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footerText glow-footer">
        Copyright<span> &copy;</span> 2023{" "}
        <Link className="footerLink" href={"/"}>
          Sbbs.Online
        </Link>
      </p>
    </footer>
  );
};

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
