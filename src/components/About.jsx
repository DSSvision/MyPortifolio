import React, { useState } from "react";

import {
  AiFillTwitterCircle,
  AiOutlineComment,
  AiFillLinkedin,
} from "react-icons/ai";
export default function About() {
  const [btnClick, setBtnClick] = useState("");
  const fileUrl = "/img file.png";
  function handleDownload() {
    setBtnClick(fileUrl);
    setBtnClick("");
  }
  const styl = { width: "30px", fontSize: "24px" };
  return (
    <div className="Main-about" id="About">
      <div className="First-abt">
        <h2>About me</h2>
        <p>
          As a versatile Frontend developer and designer, I offer a complete
          end-to-end solution for building websites. From crafting stunning,
          user-friendly designs to coding both the frontend and backend, I
          create custom websites that perfectly fit your vision.
        </p>
        <button onClick={handleDownload}>
          <a className="resume" download="mypdf.png" href={btnClick}>
            Download
          </a>
        </button>
      </div>
      <div className="Sec-Abt">
        <div className="secdiv">
          <img className="abtimg" src="mypic.jpg" alt="photo" />
          <div className="logos">
            <span>
              <AiFillTwitterCircle style={styl} />
            </span>
            <span>
              <AiOutlineComment style={styl} />
            </span>
            <span>
              <AiFillLinkedin style={styl} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
