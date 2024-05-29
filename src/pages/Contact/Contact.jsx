import Footer from "../../parts/Nav/Footer";
import Nav from "../../parts/Nav/Nav";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";

export default function Contact({isVisible}) {



  return (
    <div style={{height: "100vh", width: "100vw", background: "#222222"}}>
      <Nav />
      <motion.section initial={{opacity: 0}} animate={{opacity: isVisible ? 1 : 0}} className="contact--section">
      <div className="social__network--container">
        <a href="#"><FaWhatsapp className="icon"/></a>
        <a href="#"><MdAttachEmail className="icon"/></a>
        <a href="#"><FaLinkedin className="icon"/></a>
      </div>
      <main className="contact--container">
      <div className="keep-in-touch__container">
        <div className="social"></div>
        <h1 style={{color: "#e0e0e0"}}>Keep in touch</h1>
        <h1>{"Let's Chat!"}</h1>
      <form method="post" action="mailto:phbr10.12@gmail.com">
        <label>
          <input name="name" type="text" placeholder="Name:"></input>
        </label>
        <label>
          <input name="email" type="email" placeholder="Email:"></input>
        </label>
        <label>
          <input name="message" type="text" placeholder="hi Pedro, i wanted to tell that..."></input>
        </label>
        <button className="submit-button">Send <MdArrowForward /></button>
      </form>
      <div className="button--container">
        <button>Donwload my CV</button>
        <button>Hire-Me</button>
      </div>
      </div>
      </main>
      </motion.section>
      <Footer />  
    </div>
  )
}
