import { useState } from "react";
import Unorder from "./Unoreder.jsx";

export default function Footer() {
  const now = new Date();
  const date = now.getFullYear();
  const helpList = [
    "Learn",
    "Contact",
    "Blog",
    "Privacy Policy",
    "Terms of Use",
  ];
  const socialList = ["LinkedIn", "Twitter", "Git", "Instagram"];
  const navList = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <footer>
      <div className="four-footers">
        <div className="first-contact">
          <div className="sas">
            <Unorder helpList={socialList} />
          </div>
        </div>

        <div className="sas">
          <div className="secon-timing">
            <div>Monday - Friday</div>
            <div>10:00 - 18:00</div>
            <div>Saturaday</div>
            <div>10:00 - 13:00</div>
          </div>
        </div>

        <div className="third-ccontact">
          <div className="sas">
            <Unorder helpList={helpList} />
          </div>
        </div>

        <div className="fourth-navlist">
          <div className="sas">
            <Unorder helpList={navList} />
          </div>
        </div>
      </div>

      <div className="lastpara">&copy; {date} Sindhu dudala</div>
    </footer>
  );
}
