import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="nav">
        <div className="logo">
          <Link className="logoLink" href="/">
            sbbs.online
          </Link>
        </div>
        <div className="navbar">
          <Link className="navbarLink" href="/about">
            About
          </Link>
          <Link className="navbarLink" href="/store">
            Store
          </Link>
          <Link className="navbarLink" href="/author">
            Author
          </Link>
          <Link className="navbarLink" href="/explore">
            Author
          </Link>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footerText">
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
