import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import { Send, AlertCircle, CheckCircle } from 'react-feather';

import './style/newsletter.scss';

function NewsletterForm() {
    const [email, setEmail] = useState(null);
    const [newsletterWarningMsg, setNewsletterWarningMsg] = useState('');
    const [sendButtonMsg, setSendButtonMsg] = useState('Subscribe');
    const [newsletterSuccessMsg, setNewsletterSuccessMsg] = useState('');

    const _handleSubmit = async e => {
        e.preventDefault();
        console.log(e);
        const result = await addToMailchimp(email);
        if (email === null || email.length === 0) {
            setNewsletterWarningMsg('please input your email');
        } else {
            setNewsletterWarningMsg('');
            setSendButtonMsg('Sending...');
            const res = await addToMailchimp(email);
            if (res.result === 'error') {
                setNewsletterSuccessMsg(`${email} is already subscribed to list Public APIs Weekly Newsletter.`);
                setSendButtonMsg('Subscribe');
            } else {
                setEmail('');
                setNewsletterSuccessMsg('Successfully Subscribed. Thanks!');
                setSendButtonMsg('Subscribe');
            }

            setTimeout(() => {
                setNewsletterSuccessMsg('');
                setEmail('');
            }, 4000);
        }
    };

    const emailHandle = e => {
        e.preventDefault();
        setEmail(e.target.value);
    };

    return (
        <div className="newsletter-form">
            <Form onSubmit={_handleSubmit}>
                <InputGroup className="mb-3">
                    <FormControl placeholder="Get weekly updates about APIs" />
                    <InputGroup.Append>
                        <Button variant="primary" type="submit">
                            {sendButtonMsg}
                        </Button>
                    </InputGroup.Append>
                    <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                </InputGroup>
                <div className="warning-msg">
                    {newsletterWarningMsg !== '' && <AlertCircle size={13} />} {newsletterWarningMsg}
                </div>
                <div className="warning-success">
                    {newsletterSuccessMsg !== '' && <CheckCircle size={13} />} {newsletterSuccessMsg}
                </div>
            </Form>
        </div>
    );
}

export default NewsletterForm;
