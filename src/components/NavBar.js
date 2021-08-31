import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (<nav>{
            <div>            
              <a href="#home" key="home">Home</a>
              <a href="#about" key="about">About</a>
              <a href="#projects" key="projects">Projects</a>
            </div>

          }</nav>);
}

export default NavBar;
