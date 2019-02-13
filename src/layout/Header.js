import React from 'react';

const Header = ({ name }) => {
  return (
    <header id="home">
      <nav id="nav-wrap" style={{
        opacity: 0.6, backgroundColor: "black", padding: "10px"
      }}>
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
          </a>
        <a className="mobile-btn" href="#" title="Hide navigation">
          Hide navigation
          </a>
        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
              </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
              </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
              </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
              </a>
          </li>
          <li>
            <a className="smoothscroll" href="#testimonials">
              Testimonials
              </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
              </a>
          </li>
        </ul>
      </nav>
      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline" style={{ marginTop: "-100px" }}> {name} </h1>
          <img src="./images/profilepic.jpg" style={{ margin: "15px" }} alt="Profile Picture" className="profile-pic"></img>
          <h3>
            <div style={{ opacity: 0.8, backgroundColor: "black", padding: "10px", borderRadius: "10px" }}>
              California-based <span>Full Stack Web Developer</span>, <span>Blockchain Developer</span>,
              <span> Digital Illustrator</span> and <span>Developer Advocate</span>.
            </div>
          </h3>
          <hr />
          <ul className="social">
            <li>
              <a href="https://linkedin.com/in/steven-hernandez-760/">
                <i className="fa fa-linkedin" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/endeavors.design/">
                <i className="fa fa-instagram" />
              </a>
            </li>
            <li>
              <a href="https://github.com/code-sergeant">
                <i className="fa fa-github" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle" />
        </a>
      </p>
    </header>);
}

export default Header;