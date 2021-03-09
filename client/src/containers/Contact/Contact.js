import React, { useState } from 'react';
import axios from 'axios'
import Form from "react-bootstrap/Form";
import LoaderButton from "../../components/LoaderButton/LoaderButton";
import { onError } from "../../libs/errorLib";
// Components
import Container from '../../components/Container/Container';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { useFormFields } from "../../libs/hooksLib";

// CSS
import './Contact.css';

function Contact(props) {
  const [isLoading, setIsLoading] = useState(false);

  const [fields, handleFieldChange] = useFormFields({
    name: "",
    email: "",
    textarea: ""
  });

  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    try {
      await axios({
        method: "POST",
        url: "/api/sendMail",
        data: fields
      }).then((response) => {
        if (response.data.status === 'success') {
          alert("Message Sent.");

        } else if (response.data.status === 'fail') {
          alert("Message failed to send.")
        }
      })
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  }

  return (
    <Container className='contact-container col-12' id='contact-container'>
      <Form onSubmit={handleSubmit} className='contact-wrapper'>
        <div className='row'>
          <h1 className="display-3 text-center col-12" style={{ color: 'white', marginTop: '10px' }}>Contact</h1>
        </div>
        <Form.Group controlId="formHorizontalName" size="lg" controlId="name">
          <Form.Control
            name='name'
            placeholder='Name'
            autoFocus
            type="name"
            value={fields.name}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <Form.Group controlId="formHorizontalEmail" size="lg" controlId="email">

          <Form.Control
            name='email'
            placeholder='email'
            autoFocus
            type="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <Form.Group controlId="formHorizontalTextarea" size="lg" controlId="textarea">

          <Form.Control
            name='textarea'
            placeholder='Message...'
            autoFocus
            type="textarea"
            value={fields.textarea}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <Button type="button"
          variant='outline-primary'
          className="send-button col-7"
          id="send-button" >
          Send
        </Button>

      </Form>

    </Container>
  );
}

export default Contact;