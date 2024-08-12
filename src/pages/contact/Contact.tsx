import { motion } from "framer-motion";
import { Tabs } from "../../parts/tabs/Tabs";
import { FormEmail } from "../../components/form/FormEmail";
import styles from "./contact.module.css";
import { Container } from "react-bootstrap";

import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { Footer } from "../../parts/footer/Footer";

export default function Contact() {
  return (
    <>
      <Tabs />
      <motion.div className={styles.container} animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
        <FormEmail />
        <Container className={styles["icons-container"]} id="icons-container">
          <a 
            style={{ cursor: "pointer" }}
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=12988933305&text&type=phone_number&app_absent=0">
            <FaWhatsapp size={36} className={styles.icon} />
          </a>
          <a 
            style={{ cursor: "pointer" }}
            target="_blank"
            href="https://www.linkedin.com/in/pedro-barbosa-dev/">
            <FaLinkedin size={36} className={styles.icon} />
          </a>
          <a
            style={{ cursor: "pointer" }}
            target="_blank"
            href="https://github.com/pedro-henrique-br">
            <FaGithub size={36} className={styles.icon} />
          </a>
        </Container>
        <Footer />
      </motion.div>
    </>
  );
}
