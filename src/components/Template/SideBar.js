import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Shiman Zhang</h2>
        <p><a href="mailto:sz598@cornell.edu">sz598@cornell.edu</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Shiman. I am a <a href="https://www.orie.cornell.edu/orie">Cornell ORIE</a> graduate, specialzing in Financial Engineerng, UCLA Alumni studying Applied Math and Economics,
        and incoming Quantitative Analytics Summer Associate at <a href="https://www.jpmorgan.com/global">J.P. Morgan Chase</a>. At the same time,
        I work as a part-time Research Consulamt at <a href="https://www.worldquant.com/">Worldquant</a>.
        Previously, I have interned at <a href="https://en.cicc.com/">Chinese International Capital Corporation, (CICC)</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Shiman Zhang <Link to="/">saaammi0313.github.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;
