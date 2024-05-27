import Nav from "../../parts/Nav/Nav";
import { FaGitAlt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiLinux } from "react-icons/si";
import { FaNpm } from "react-icons/fa6";
import { BsBootstrapFill } from "react-icons/bs";
import { AiOutlineJavaScript } from "react-icons/ai";import { FaReact } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";import { FaNodeJs } from "react-icons/fa6";

export default function About() {
  return (
    <div>
      <Nav />
      <div className="about--section">
      <div className="about--container">
        <h1>About Me</h1>
        <p className="about--subtitle">
          {
            "👋 Hello, I'm Pedro Henrique, a  passionate front-end development enthusiast and a dedicated student of  Systems Analysis and Development. I'm always exploring new technologies and frameworks to improve my  skills and stay up to date with industry trends."
          }
        </p>
        <h1>What is my goal?</h1>
        <p className="about__subtitle--goal">
          I am looking for new opportunities to improve my skills in the job
          market. like a internship or front-end developer
        </p>
        <h1>My tech stack</h1>
        <div className="icons--container">
          <ul>
            <div className="icon">
              <li
                style={{
                  background: "#F03C2E",
                  borderRadius: "16px",
                  width: "86px",
                  height: "86px",
                }}>
                <FaGitAlt color="#ffff" size={56} />
              </li>
              <p>Git</p>
            </div>
            <div className="icon">
              <li
                style={{
                  background: "#242938",
                  borderRadius: "16px",
                  width: "86px",
                  height: "86px",
                }}>
                <FaGithub color="#ffff" size={56} />
              </li>
              <p>GitHub</p>
            </div>
            <div className="icon">
              <li
                style={{
                  background: "#242938",
                  borderRadius: "16px",
                  width: "86px",
                  height: "86px",
                }}>
                <FaNpm color="#ffff" size={56} />
              </li>
              <p>Npm</p>
            </div>
            <div className="icon">
              <li
                style={{
                  background: "#242938",
                  borderRadius: "16px",
                  width: "86px",
                  height: "86px",
                }}>
                <SiLinux color="#ffff" size={56} />
              </li>
              <p>Linux</p>
            </div>
            <div className="icon">
              <li>
                <BsBootstrapFill color="#9013FE" size={86} />
              </li>
              <p>Bootstrap</p>
            </div>
            <div className="icon">
              <li className="icon-container"
                style={{
                  background: "#F0DB4F",
                  borderRadius: "16px",
                  width: "86px",
                  height: "86px",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  paddingRight: "5px"
                }}>
                <AiOutlineJavaScript color="#242938" size={56} />
              </li>
              <p>JavaScript</p>
            </div>
            <div className="icon">
              <li
                style={{
                  background: "#242938",
                  borderRadius: "16px",
                  width: "86px",
                  height: "86px",
                }}>
                <FaReact color="#00D8FF" size={56} />
              </li>
              <p>React</p>
            </div>
            <div className="icon">
              <li 
                >
                <SiTypescript color="#007ACC" style={{borderRadius: "16px"}} size={86} />
              </li>
              <p>Typescript</p>
            </div>
            <div className="icon">
              <li
                style={{
                  background: "#242938",
                  borderRadius: "16px",
                  width: "86px",
                  height: "86px",
                }}>
                <FaNodeJs color="#81CD39" size={56} />
              </li>
              <p>Node Js</p>
            </div>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
}
