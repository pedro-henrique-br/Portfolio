import Nav from "../../parts/Nav/Nav";
import { FaGithub } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";
import { motion } from "framer-motion";

export default function Projects({isVisible}) {
  return (
    <div className="container">
      <Nav />
      <motion.div initial={{opacity: 0}} animate={{opacity: isVisible ? 1 : 0}}  className="project--section">
      <main>
      <div className="project--container">
      <img className="project--info" src="_blank"></img>
      <div className="project__container--info">
        <h1>Eccomerce FullStack</h1>
        <div className="project--stack">
          <img src="https://skillicons.dev/icons?i=react"></img>
          <img src="https://skillicons.dev/icons?i=typescript"></img>
          <img src="https://skillicons.dev/icons?i=nodejs"></img>
          <img src="https://skillicons.dev/icons?i=bootstrap"></img>
        </div>
        <p>A Full stack Ecommerce App with express and react router. who allows the users to buy items and sell products</p>
        <div className="icon--container">
          <div className="icon"><a href="#"><FaGithub size={36} className="icon"/></a><p><a href="#">Source Code</a></p></div>
          <div className="icon"><a href="#"><TbExternalLink  size={36} className="icon"/></a><p><a href="#">Preview</a></p></div>
        </div>
      </div>
      </div>
      <div className="project--container">
      <img className="project--info" src="_blank"></img>
      <div className="project__container--info">
        <h1>Eccomerce FullStack</h1>
        <div className="project--stack">
          <img src="https://skillicons.dev/icons?i=react"></img>
          <img src="https://skillicons.dev/icons?i=typescript"></img>
          <img src="https://skillicons.dev/icons?i=nodejs"></img>
          <img src="https://skillicons.dev/icons?i=bootstrap"></img>
        </div>
        <p>A Full stack Ecommerce App with express and react router. who allows the users to buy items and sell products</p>
        <div className="icon--container">
          <div className="icon"><a href="#"><FaGithub size={36} className="icon"/></a><p><a href="#">Source Code</a></p></div>
          <div className="icon"><a href="#"><TbExternalLink  size={36} className="icon"/></a><p><a href="#">Preview</a></p></div>
        </div>
      </div>
      </div>
      <div className="project--container">
      <img className="project--info" src="_blank"></img>
      <div className="project__container--info">
        <h1>Eccomerce FullStack</h1>
        <div className="project--stack">
          <img src="https://skillicons.dev/icons?i=react"></img>
          <img src="https://skillicons.dev/icons?i=typescript"></img>
          <img src="https://skillicons.dev/icons?i=nodejs"></img>
          <img src="https://skillicons.dev/icons?i=bootstrap"></img>
        </div>
        <p>A Full stack Ecommerce App with express and react router. who allows the users to buy items and sell products</p>
        <div className="icon--container">
          <div className="icon"><a href="#"><FaGithub size={36} className="icon"/></a><p><a href="#">Source Code</a></p></div>
          <div className="icon"><a href="#"><TbExternalLink  size={36} className="icon"/></a><p><a href="#">Preview</a></p></div>
        </div>
      </div>
      </div>
      </main>
      </motion.div> 
    </div>
  )
}
