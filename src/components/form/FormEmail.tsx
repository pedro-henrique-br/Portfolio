import { FormEvent } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import styles from "./formEmail.module.css";
import { Bounce, toast } from "react-toastify";
import { FaLongArrowAltRight } from "react-icons/fa";

export const FormEmail = () => {
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const form = {
      name: data.get("name") as string,
      email: data.get("email") as string,
      message: data.get("message") as string,
    };

    if (form.name === "" && form.email === "" && form.message === "") {
      toast.error("Please fill all fields", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } else {
      const fetchEmail = (name: string, email: string, message: string) => {
        axios
          .post("https://api.emailjs.com/api/v1.0/email/send", {
            service_id: "service_rc2n1q9",
            template_id: "template_9n77wul",
            user_id: "um2hpzlAB5ja0t25F",
            template_params: {
              from_name: name,
              email: email,
              message: message,
            },
          })
          .then(() =>
            toast.success("Email sent", {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
            })
          )
          .catch((error) =>
            toast.error(`error ${error}`, {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
            })
          );
      };
      fetchEmail(form.name, form.email, form.message);
    }
  };

  return (
    <Form className={styles.form} id="form" onSubmit={(e) => sendEmail(e)}>
      <h1 className={styles.title}>Entre em contato</h1>
      <h4 className={styles["sub-title"]}>Vamos conversar!</h4>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          className={styles.input}
          type="text"
          name="name"
          placeholder="Name:"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          className={styles.input}
          type="email"
          placeholder="Email:"
          name="email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          className={styles.input}
          type="text"
          placeholder="Olá Pedro, gostaria de dizer...."
          name="message"
        />
      </Form.Group>
      <Button className={styles["button-form"]} variant="primary" type="submit">
        Enviar
        <FaLongArrowAltRight />
      </Button>
      <div className={styles["buttons-container"]}>
        <button className={styles.button}>
          <a 
          target="_blank"
          href="https://api.whatsapp.com/send/?phone=12988933305&text=Olá Pedro&type=phone_number&app_absent=0">
            Me contrate
          </a>
        </button>
        <button className={styles.button}>
          <a 
          target="_blank"
          href="https://docs.google.com/document/d/13aqhUvK5uRY3zhXOLFMGG-0HT4YO9tyJ/edit?usp=sharing&ouid=116848033097707566366&rtpof=true&sd=true">
             Veja meu currículo
          </a>
        </button>
      </div>
    </Form>
  );
};
