import emailjs from '@emailjs/browser';
import { useState } from 'react';
import styled from 'styled-components';

export default function Contact() {
  const [values, setValues] = useState({
    name: '',
    company: '',
    email: '',
    subject: 'We want you!',
    message: `Hey Patrick,
    \nYour page looks great and it seems like you are an awesome guy!
We really need someone like you in our team. YOU ARE HIRED!
We are looking forward to hear from you to talk about the details.
    \nCheers mate`,
  });

  return (
    <>
      <ContactHeadline id='contact'>CONTACT</ContactHeadline>
      <Form onSubmit={handleSubmit}>
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
          required
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
          defaultValue={values.message}
        />
        <SubmitButton>send email</SubmitButton>
      </Form>
    </>
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
      subject: 'We want you!',
      message: `Hey Patrick,
        \nYour page looks great and it seems like you are an awesome guy!
    We really need someone like you in our team. YOU ARE HIRED!
    We are looking forward to hear from you to talk about the details.
        \nCheers mate`,
    });
  }

  function handleChange(event) {
    setValues({ ...values, [event.target.name]: event.target.value });
  }
}

const ContactHeadline = styled.h2`
  text-align: center;
  color: #313035;

  @media screen and (min-width: 769px) {
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px;
  font-weight: 300;
  line-height: 2rem;

  p {
    width: 300px;
  }

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
  transition: 0.5s;

  :hover {
    background-color: greenyellow;
    color: white;
  }
`;
