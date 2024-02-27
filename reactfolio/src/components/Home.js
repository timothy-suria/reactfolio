import react from "react";
import "../styles/home.css";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div id="header">
      <div className="header-text">
        <h1>
          Hi, I'm <span>Timothy</span>
          <br />
          Suria from <h1 className="half-color-text">Indonesia</h1>
        </h1>
        <TypeAnimation
          sequence={[
            "A proud Software engineer",
            1000,
            "A proud Frontend developer",
            1000,
            "A proud Computer scientist",
            1000,
            "A proud Programmer",
            1000,
          ]}
          wrapper="span"
          speed={10}
          repeat={Infinity}
        />
      </div>
    </div>
  );
}
