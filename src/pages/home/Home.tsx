import { motion } from "framer-motion";
import styles from "./home.module.css";
import { Tabs } from "../../parts/tabs/Tabs";
import { Col, Container, Image, Row } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Home = () => {
  return (
    <>
      <Tabs />
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
        <Container className={styles["home-container"]}>
          <Container>
            <h1 className={styles["title"]}>Front-End Developer</h1>
            <p className={styles["subtitle"]}>{`Olá, Eu me chamo Pedro Barbosa e sou um Desenvolvedor front-end nascido em Ilhabela 📍`}</p>
            <div className={styles["icons-container"]}>
              <a
                style={{ cursor: "pointer" }}
                target="_blank"
                href="https://www.linkedin.com/in/pedro-barbosa-dev/">
                <FaLinkedin size={36} />
              </a>
              <a
                style={{ cursor: "pointer" }}
                target="_blank"
                href="https://github.com/pedro-henrique-br">
                <FaGithub size={36} />
              </a>
            </div>
          </Container>
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Image src="me.png" />
            </Col>
          </Row>
        </Container>
      </Container>
      </motion.div>
    </>
  );
};
