import Nav from "../../parts/Nav/Nav";
import { motion } from "framer-motion";

export default function Contact({isVisible}) {
  return (
    <div>
      <Nav />
      <motion.main initial={{opacity: 0}} animate={{opacity: isVisible ? 1 : 0}}>
        <h1>Contact</h1>
      </motion.main>
    </div>
  )
}
