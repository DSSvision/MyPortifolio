import React from "react";

function Header() {
  return (
    <div className="mainhead" id="Home">
      <div className="headCard">
        <div className="innHead">
          <h1>Hi, I`m Sindhu Dudala</h1>
          <h3>Frontend Developer</h3>
          <button>View my work</button>
        </div>
      </div>
      <div className="sechead">
        <div className="imghead">
          <img src="/ffpic.jpg" alt="image" />
        </div>
      </div>
    </div>
  );
}

export default Header;
