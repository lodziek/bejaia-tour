import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const { register, formState: { errors }, handleSubmit } = useForm()

  const notify = () => {
    toast.success('Your message has been send', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const sendEmail = () => {

    emailjs.sendForm('service_uqgnn9k', 'template_wujtegn', form.current, 'iCBnosdfeoA31ZJ6B')
      .then((result) => {
        console.log(result.text);
        form.current.reset();
        notify();
      });
  };
  return (
    <>
      <motion.section
        className="contact"
        id="contact"
        initial={{ filter: 'blur(8px)' }}
        animate={{ filter: 'blur(0)' }}
        exit={{ filter: 'blur(8px)' }}
        transition={{ ease: "linear", duration: .5 }}
      >
        <div className="heading">
          <h2>Contact Us</h2>
        </div>
        <div className="contact-container">
          <form ref={form} onSubmit={handleSubmit(sendEmail)}>
            <label className='label-title'>Name</label>
            <input className='input' {...register("user_name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be atleast 3 charachters"
              },
              maxLength: {
                value: 30,
                message: "Name must be atmost 30 charachters"
              },
            })} type="text" name="user_name" />
            <label className='error'>{errors.user_name?.message}</label>
            <label className='label-title'>Email</label>
            <input className='input' {...register("user_email", {
              required: "Email is required",
              pattern: {
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Email must be valid",
              }

            })} type="email" name="user_email" />
            <label className='error'>{errors.user_email?.message}</label>
            <label className='label-title'>Message</label>
            <textarea {...register("message", {
              required: "Write Something please",
              minLength: {
                value: 10,
                message: "Your message is too short"
              },
              maxLength: {
                value: 700,
                message: "Your message is too long"
              }
            })} name="message" maxLength={'2000'}/>
            <label className='error'>{errors.message?.message}</label>
            <input className='btn send neon' type="submit" value="Send" />
            <ToastContainer className='toast'/>
          </form>
        </div>
      </motion.section>
    </>
  )
}

export default Contact