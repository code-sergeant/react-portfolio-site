import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
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
          <ul className="copyright">
            <li>©Steven Hernandez 2019</li>
            <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
          </ul>
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
      </div>
    </footer>
  );
}

export default Footer;