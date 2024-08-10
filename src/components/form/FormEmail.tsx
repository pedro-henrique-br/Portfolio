import { FormEvent } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export const FormEmail = () => {
  
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget);

    const form = {
      name: data.get("name") as string,
      email: data.get("email") as string,
      message: data.get("message") as string
    }
    
    const fetchEmail = (name: string, email: string , message: string) => {
      axios.post('https://api.emailjs.com/api/v1.0/email/send', {
        service_id: "service_rc2n1q9",
        template_id: "template_9n77wul",
        user_id: "um2hpzlAB5ja0t25F",
          template_params: {
            from_name: name,
            email: email,
            message: message
          }
      })
      .then((response) => console.log(response))
      .catch((error) => console.error(error))
    }
    
    
    console.log(form)
    fetchEmail(form.name, form.email, form.message)
    
  }
  
  return (
  
  
    <Form onSubmit={(e) => sendEmail(e)}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="text" name='name' placeholder="name" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>email</Form.Label>
      <Form.Control type="email" placeholder="email" name='email' />
    </Form.Group>
 
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>message</Form.Label>
      <Form.Control type="text" placeholder="message" name='message' />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
    </Form>
  )
}
