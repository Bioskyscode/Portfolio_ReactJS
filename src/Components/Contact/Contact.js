import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import "./Contact.css"
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import env from "dotenv"

const Contact = () => {
    // const SERVICE_ID = process.env.EMAILJS_SERVICE_ID
    // const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID
    // const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY
    const form = useRef()

    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [jobtype, setJobtype] = useState("");
    const [message, setMessage] = useState("");
    const [errorName, setErrorName] = useState("");
    const [errorMail, setErrorMail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const emailValidation = (e) => {
        setMail(e.target.value)
        if (!regEx.test(mail)) {
            setErrorMail("Invalid Mail Pattern")
        } else {
            setErrorMail("")
            return true

        }
    }

    const nameValidation = (e) => {
        setName(e.target.value)
        if (name.length <= 2) {
            setErrorName("Name should be atleast 4 Letters")
        } else {
            setErrorName("")
        }
    }
    const messageValidation = (e) => {
        setMessage(e.target.value)
        if (message.length <= 9) {

            setErrorMessage("Text Should be Atleast 10 Letters")
        } else {
            setErrorMessage("")
        }
    }

    const sendEmail = (event) => {
        event.preventDefault();
        if (!name) {
            return (toast.error("Please enter your name"), toast.clearWaitingQueue())
        } else if (name.length <= 3) {
            return (toast.error("Name should be atleast 4 Letters"), toast.clearWaitingQueue())
        }

        if (!mail) {
            return (toast.error("Please add your E-Mail Address"), toast.clearWaitingQueue());
        } else if (!regEx.test(mail)) {
            return (toast.error("Please enter valid Email"), toast.clearWaitingQueue());
        }

        if (!jobtype) {
            return (toast.error("Please add Job-type"), toast.clearWaitingQueue());
        }

        if (!message) {
            return (toast.error("Please leave a message"), toast.clearWaitingQueue());
        } else if (message.length <= 9) {
            return (toast.error("Text should be at least 10 letters"), toast.clearWaitingQueue());
        }

        emailjs.sendForm("service_zk5h1rp", "template_4fsqz6c", form.current, {
            publicKey: "uvGjS6myR0OtmZeBm",
        })
            .then(
                () => {
                    toast.success("Message sent!", {
                        position: "top-right",
                    });
                    setName("")
                    setMail("")
                    setJobtype("")
                    setMessage("")
                },
                (error) => {
                    toast.error(error, {
                        position: "top-right",
                        className: "toast-msg"
                    });
                },
            );
      
    };

    return (
        <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", stiffness: 30 }} className='vanilla-container1 contact-section' id='contact'>
            <div className='row'>
                <div className='col-xl-5 col-lg-5 col-md-5 col-sm-5'>
                    <div className='contact-form-img'>
                        <img src='https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D' alt='img'></img>
                    </div>
                </div>

                <div className='col-xl-7 col-lg-7 col-md-9 col-sm-12'>
                    <div className='conntact-form-design'>
                        <h5 className='text-center'>
                            Contact Me
                            <span className='line'></span>
                        </h5>

                        <form ref={form}>
                            <div className='contact-form'>
                                <label className='form-label'>{errorName ? <p className='error'>{errorName}</p> : "Name"}</label>

                                <input type='text' style={name.length <= 3 ? { border: "1px solid #fecaca" } : { border: "1px solid #14b8a6" }} className='form-control'
                                    name="user_name" value={name} onChange={nameValidation}
                                />
                            </div>
                            <div className='contact-form'>

                                <label className='form-label'>{errorMail ? <p className='error'>{errorMail}</p> : "Email"}</label>
                                <input type='text' className='form-control'
                                    style={!regEx.test(mail) ? { border: "1px solid #fecaca" } : { border: "1px solid #14b8a6" }}
                                    name="user_email" value={mail} onChange={emailValidation}
                                />
                            </div>
                            <div className='contact-form'>
                                <label className='form-label'>Job Type</label>
                                <select className='custom-select-tag'
                                    name="job_type" value={jobtype} onChange={e => setJobtype(e.target.value)}
                                    style={!jobtype ? { border: "1px solid #fecaca",  background: "white" } : { border: "1px solid #14b8a6", background: "white" }}
                                >
                                    <option></option>
                                    <option>Full-Time</option>
                                    <option>Part-Time</option>
                                    <option>Others</option>
                                </select>
                            </div>
                            <div className='contact-form'>
                                <label className='form-label'>{errorMessage ? <p className='error'>{errorMessage}</p> : "Message"}</label>
                                <textarea type='text' className='form-control'
                                    style={message.length < 10 ? { border: "1px solid #fecaca" } : { border: "1px solid #14b8a6" }}
                                    name="message" value={message} onChange={messageValidation}
                                />
                            </div>
                            <button onClick={sendEmail} className='submit'><span>Send <i className="fa-regular fa-paper-plane"></i></span></button>
                        </form>

                    </div>
                </div>

            </div>
            <ToastContainer autoClose={2000} limit={1} />
        </motion.div>

    )
}

export default Contact