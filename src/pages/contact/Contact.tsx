import { motion } from "framer-motion"
import { Tabs } from "../../parts/tabs/Tabs"
import { FormEmail } from "../../components/form/FormEmail"

export default function Contact() {
    
  return (
    <>
    <Tabs />
    <motion.div animate={{ opacity: 1}} initial={{opacity: 0}}>
    <FormEmail />
    </motion.div>
    </>
  )
}
