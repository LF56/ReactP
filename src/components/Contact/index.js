import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section >
      <h1 data-testid="h1tag" className='text-center'>Get In Touch!</h1>
     
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="grid-container" >
          <div className="grid-x grid-padding-x position-center align-center">
            
            <div className="medium-6 cell">
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
              <label htmlFor="email">Email address:</label>
              <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
              <label htmlFor="message">Message:</label>
              <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
              {errorMessage && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
              <div>
              <button className="button" type="submit">Submit</button>
                </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Contact;
