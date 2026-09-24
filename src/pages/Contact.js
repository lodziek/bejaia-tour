import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Page from '../components/Page';
import Icon from '../components/Icon';
import './Contact.css';

// EmailJS identifiers are public by design; they can be overridden per environment (.env).
const EMAILJS = {
    service: process.env.REACT_APP_EMAILJS_SERVICE || 'service_uqgnn9k',
    template: process.env.REACT_APP_EMAILJS_TEMPLATE || 'template_wujtegn',
    publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'iCBnosdfeoA31ZJ6B',
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const Field = ({ id, label, error, children }) => (
    <div className={`field${error ? ' has-error' : ''}`}>
        <label htmlFor={id}>{label}</label>
        {children}
        {error && (
            <span className="field-error" id={`${id}-error`} role="alert">
                {error.message}
            </span>
        )}
    </div>
);

const Contact = () => {
    const formRef = useRef(null);
    const [sending, setSending] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const aria = (name) => ({ 'aria-invalid': !!errors[name], 'aria-describedby': errors[name] ? `${name}-error` : undefined });

    const send = async () => {
        setSending(true);
        try {
            await emailjs.sendForm(EMAILJS.service, EMAILJS.template, formRef.current, EMAILJS.publicKey);
            reset();
            toast.success('Thank you! Your message has been sent.');
        } catch {
            toast.error('Sorry, the message could not be sent. Please try again in a moment.');
        } finally {
            setSending(false);
        }
    };

    return (
        <Page title="Contact" className="page">
            <section className="container section contact">
                <div className="contact-intro">
                    <span className="eyebrow">Contact</span>
                    <h1>Let's plan your stay in Béjaïa</h1>
                    <p>
                        Tell us when you'd like to come, how many you are and what you dream of doing. We usually answer
                        within two working days.
                    </p>
                    <ul className="contact-points">
                        <li>
                            <Icon name="pin" />
                            <div>
                                <strong>Based in</strong>
                                <span>Béjaïa, Algeria</span>
                            </div>
                        </li>
                        <li>
                            <Icon name="plane" />
                            <div>
                                <strong>Nearest airport</strong>
                                <span>Béjaïa – Soummam – Abane Ramdane (BJA)</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <form ref={formRef} className="contact-form" onSubmit={handleSubmit(send)} noValidate>
                    <Field id="user_name" label="Your name" error={errors.user_name}>
                        <input
                            id="user_name"
                            type="text"
                            autoComplete="name"
                            {...aria('user_name')}
                            {...register('user_name', {
                                required: 'Please tell us your name.',
                                minLength: { value: 2, message: 'Your name must be at least 2 characters.' },
                                maxLength: { value: 60, message: 'Your name must be at most 60 characters.' },
                            })}
                        />
                    </Field>

                    <Field id="user_email" label="Email" error={errors.user_email}>
                        <input
                            id="user_email"
                            type="email"
                            autoComplete="email"
                            {...aria('user_email')}
                            {...register('user_email', {
                                required: 'We need your email to answer you.',
                                pattern: { value: EMAIL_PATTERN, message: 'Please enter a valid email address.' },
                            })}
                        />
                    </Field>

                    <Field id="message" label="Your project" error={errors.message}>
                        <textarea
                            id="message"
                            rows={6}
                            maxLength={1000}
                            placeholder="Dates, number of travellers, what you'd like to see…"
                            {...aria('message')}
                            {...register('message', {
                                required: 'Please write a few words.',
                                minLength: { value: 10, message: 'Your message is a little short (10 characters minimum).' },
                                maxLength: { value: 1000, message: 'Your message is too long (1000 characters maximum).' },
                            })}
                        />
                    </Field>

                    <button type="submit" className="btn btn-primary" disabled={sending}>
                        {sending ? 'Sending…' : 'Send message'} <Icon name="arrowRight" />
                    </button>
                </form>
            </section>
            <ToastContainer position="bottom-right" autoClose={5000} />
        </Page>
    );
};

export default Contact;
