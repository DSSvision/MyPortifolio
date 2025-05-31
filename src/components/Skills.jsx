import { Fragment } from "react";

export default function Skills() {
  return (
    <div className="Skills" id="Skills">
      <div>
        <h2>Skills</h2>
      </div>
      <ul>
        <li className="listitem">
          <span>HTML</span>
          <meter value="4" min="0" max="5" />
        </li>
        <li className="listitem">
          <span>CSS</span>
          <meter value="4" min="0" max="5" />
        </li>
        <li className="listitem">
          <span>Javascript</span>
          <meter value="4" min="0" max="5" />
        </li>
        <li className="listitem">
          <span>React Js</span>
          <meter value="4" min="0" max="5" />
        </li>
        <li className="listitem">
          <span>Python</span>
          <meter value="4" min="0" max="5" />
        </li>
        <li className="listitem">
          <span>SQL</span>
          <meter value="4" min="0" max="5" />
        </li>
      </ul>
    </div>
  );
}
