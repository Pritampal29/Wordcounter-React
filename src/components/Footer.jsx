import React from "react";

const Footer = () => {
  const currYear = new Date().getFullYear();
  return (
    <footer className="text-center py-3 bg-dark text-white">
      &copy; {currYear} Pritam Pal. All rights reserved.
    </footer>
  );
};

export default Footer;
