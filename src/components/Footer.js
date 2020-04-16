import React from "react";
import "../../src/App.css";

function Footer({ copyright, date }) {
  return (
    <footer>
      <p>{copyright}, {date}</p>
    </footer>
  );
}

export default Footer;