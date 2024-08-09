import { motion } from "framer-motion"
import { Tabs } from "../../parts/tabs/Tabs"

export default function Contact() {
  return (
    <>
    <Tabs />
    <motion.div animate={{ opacity: 1}} initial={{opacity: 0}}>
    <h1>Contact</h1>
    </motion.div>
    </>
  )
}
