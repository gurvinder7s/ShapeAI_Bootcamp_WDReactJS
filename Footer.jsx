import React from "react";

function Footer() {
  var copyYear = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright @ {copyYear}</p>
    </footer>
  );
}

export default Footer;
