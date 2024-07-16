import Nav from "../../parts/Nav/Nav";
import { FaGithub } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";
import { motion } from "framer-motion";

export default function Projects({isVisible}) {
  return (
    <div className="container">
      <Nav />
      <main>
      <motion.div initial={{opacity: 0}} animate={{opacity: isVisible ? 1 : 0}}  className="project--section">
      <div className="project--container" style={{marginTop: "8vh"}}>
      <img className="project--info" src="src\assets\img\img-movieApp.png" style={{height: "300px", width: "500px"}}></img>
      <div className="project__container--info">
        <h1>Movie App</h1>
        <div className="project--stack">
          <img src="https://skillicons.dev/icons?i=html"></img>
          <img src="https://skillicons.dev/icons?i=css"></img>
          <img src="https://skillicons.dev/icons?i=bootstrap"></img>
          <img src="https://skillicons.dev/icons?i=javascript"></img>
        </div>
        <p style={{fontSize: "1.1rem"}}>This is a movie app built with HTML, CSS (Bootstrap) and JavaScript. It allows users to search for films, view details of their film such as: film duration, IMBD rating, categories, company and film description. in addition to allowing you to save films as favorites and watch them later.</p>
        <div className="icon--container">
          <div className="icon"><a href="https://github.com/pedro-henrique-br/Movie-App"><FaGithub size={36} className="icon"/></a><p><a href="#">Source Code</a></p></div>
          <div className="icon"><a href="https://movie-app-beige-two-18.vercel.app/"><TbExternalLink  size={36} className="icon"/></a><p><a href="#">Preview</a></p></div>
        </div>
      </div>
      </div>
      <div className="project--container">
      <img className="project--info" src="_blank"></img>
      <div className="project__container--info">
        <h1>Coming Soon...</h1>
        <div className="project--stack">
          <img src="https://skillicons.dev/icons?i=react"></img>
          <img src="https://skillicons.dev/icons?i=typescript"></img>
          <img src="https://skillicons.dev/icons?i=nodejs"></img>
          <img src="https://skillicons.dev/icons?i=bootstrap"></img>
        </div>
        <p>New Projects are coming soon...</p>
        <div className="icon--container">
          <div className="icon"><a href="#"><FaGithub size={36} className="icon"/></a><p><a href="#">Source Code</a></p></div>
          <div className="icon"><a href="#"><TbExternalLink  size={36} className="icon"/></a><p><a href="#">Preview</a></p></div>
        </div>
      </div>
      </div>
      <div className="project--container">
      <img className="project--info" src="_blank"></img>
      <div className="project__container--info">
        <h1>Coming Soon...</h1>
        <div className="project--stack">
          <img src="https://skillicons.dev/icons?i=react"></img>
          <img src="https://skillicons.dev/icons?i=typescript"></img>
          <img src="https://skillicons.dev/icons?i=nodejs"></img>
          <img src="https://skillicons.dev/icons?i=bootstrap"></img>
        </div>
        <p>New Projects are coming soon...</p>
        <div className="icon--container">
          <div className="icon"><a href="#"><FaGithub size={36} className="icon"/></a><p><a href="#">Source Code</a></p></div>
          <div className="icon"><a href="#"><TbExternalLink  size={36} className="icon"/></a><p><a href="#">Preview</a></p></div>
        </div>
      </div>
      </div>
      </motion.div> 
      </main>
    </div>
  )
}
