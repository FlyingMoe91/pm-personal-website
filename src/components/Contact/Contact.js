import emailjs from '@emailjs/browser';
import { useState } from 'react';
import styled from 'styled-components';

import { FaRegSmileWink as Smiley } from 'react-icons/fa';

export default function Contact() {
  const [values, setValues] = useState({
    name: '',
    company: '',
    email: '',
    subject: 'We want you!',
    message: `Hey Patrick,
    \nYour page looks great and it seems like you are an awesome guy!
We really need someone like you in our team. 
\n      YOU ARE HIRED!
    \nWe are looking forward to hear from you to talk about the details.
    \n\nCheers mate`,
  });

  return (
    <Wrapper>
      <h2 id='contact'>CONTACT</h2>
      <p>Wanna get in touch?</p>{' '}
      <p>
        Just fill in your name, your email and press 'send email'. I took care
        of the rest. Of course you can edit the inputs...but I think we know
        that wont be necessary. <Smiley />
      </p>
      <Form id='form' onSubmit={handleSubmit}>
        <label htmlFor='name'>name</label>
        <input
          type='text'
          name='name'
          id='name'
          onChange={handleChange}
          required
          placeholder='your name'
        />
        <label htmlFor='company'>company</label>
        <input
          type='text'
          name='company'
          id='company'
          onChange={handleChange}
          placeholder='name of your company'
        />
        <label htmlFor='email'>email</label>
        <input
          type='email'
          name='email'
          id='email'
          onChange={handleChange}
          required
          placeholder='your email'
        />
        <label htmlFor='subject'>subject</label>
        <input
          type='text'
          name='subject'
          id='subject'
          onChange={handleChange}
          required
          placeholder='reason for your message'
          defaultValue={values.subject}
        />
        <label htmlFor='message'>message</label>
        <textarea
          type='text'
          name='message'
          id='message'
          rows='15'
          onChange={handleChange}
          required
          placeholder='Hey Patrick, ....'
          defaultValue={values.message}
        />
        <ResetButton onClick={handleResetForm}>reset form</ResetButton>
        <SubmitButton>send email</SubmitButton>
      </Form>
    </Wrapper>
  );

  function handleSubmit(event) {
    event.preventDefault();

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        values,
        process.env.REACT_APP_USER_KEY
      )
      .catch((error) => {
        console.error(error);
      });

    setValues({
      name: '',
      company: '',
      email: '',
      subject: '',
      message: '',
    });
    event.target.reset();
  }

  function handleChange(event) {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  function handleResetForm(event) {
    event.preventDefault();
    const name = document.getElementById('name');
    const company = document.getElementById('company');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    name.value = '';
    company.value = '';
    email.value = '';
    subject.value = '';
    message.value = '';
  }
}

const Wrapper = styled.section`
  text-align: center;
  color: #313035;
  margin: 0 auto;

  p {
    font-weight: 300;
  }

  @media screen and (min-width: 769px) {
    font-size: 1.5rem;
    width: 800px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px;
  font-weight: 300;
  line-height: 2rem;
  text-align: left;

  input {
    font-size: inherit;
    font-weight: 300;
    margin-bottom: 10px;
    padding: 5px;
  }

  textarea {
    font-size: inherit;
    font-weight: 300;
    padding: 5px;
  }

  @media screen and (min-width: 480px) {
    font-size: 1.3rem;
    width: 800px;
    margin: 20px auto;
  }

  @media screen and (min-width: 1200px) {
    font-size: 2;
  }
`;

const SubmitButton = styled.button`
  width: 50%;
  margin: 20px auto;
  padding: 10px;
  border: 1px solid #313035;
  border-radius: 5px;
  font-size: 1rem;
  background-color: hotpink;
  color: #313035;
  cursor: pointer;
  transition: 0.5s;

  :hover {
    background-color: lightgreen;
  }
`;

const ResetButton = styled.button`
  width: 100px;
  align-self: flex-end;
  cursor: pointer;
  background-color: transparent;
  color: hotpink;
  border: 1px solid #313035;
  border-radius: 5px;
`;
