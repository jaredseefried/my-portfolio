import React from 'react';

// Components
import Container from '../../components/Container/Container';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

// CSS
import './Contact.css';

function Contact(props) {
  return (
    <Container className='contact-container col-12'>
      <div className='contact-wrapper'>
        <div className='row'>
          <h1 className="display-3 text-center col-12" style={{ color: 'white', marginTop: '10px' }}>Contact</h1>
        </div>
        <div className='row'>
          <Input
            name='Name'
            placeholder='Name'
            label='Name'
            className='col-7'
          />
        </div>
        <div className='row'>
          <Input
            name='Email'
            placeholder='Email'
            label='Email'
            className='col-7'
          />
        </div>
        <div className='row'>
          <Input
            as='textarea'
            name='Message'
            placeholder='Type A Message...'
            label='Message'
            className='col-7 input-textarea'
            style={{ height: '25vh' }}
          />
        </div>
        <div className='row'>
          <Button type="button"
            variant='outline-primary'
            className="send-button col-7"
            id="send-button" >
            Send
        </Button>
        </div>
      </div>

    </Container>
  );
}

export default Contact;