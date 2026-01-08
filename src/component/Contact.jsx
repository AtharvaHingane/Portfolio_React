import React, { useState } from 'react';
import '../Style/Contact.css';
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiSend } from "react-icons/fi";

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "241bea04-a798-466c-ab37-d0340fc66147");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully");
                event.target.reset();
            } else {
                console.error("Error", data);
                setResult(data.message);
            }
        } catch (error) {
            console.error("Error", error);
            setResult("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="contact-section">
            <div className="contact-container">
                <div className="contact-info">
                    <h2 className="section-title">Let's <span className="highlight">Connect</span></h2>
                    <p className="contact-desc">
                        Have a project in mind or just want to chat? Feel free to reach out.
                        I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>

                    <div className="social-links">
                        <a href="https://github.com/AtharvaHingane" target="_blank" rel="noopener noreferrer" className="social-item">
                            <div className="icon-box">
                                <FiGithub />
                            </div>
                            <span>Github</span>
                        </a>
                        <a href="https://www.linkedin.com/in/atharvahingane" target="_blank" rel="noopener noreferrer" className="social-item">
                            <div className="icon-box">
                                <FiLinkedin />
                            </div>
                            <span>LinkedIn</span>
                        </a>
                        <a href="https://instagram.com/__atharv_pvt_" target="_blank" rel="noopener noreferrer" className="social-item">
                            <div className="icon-box">
                                <FiInstagram />
                            </div>
                            <span>Instagram</span>
                        </a>
                        <a href="mailto:atharvahingane220@gmail.com" className="social-item">
                            <div className="icon-box">
                                <FiMail />
                            </div>
                            <span>Email</span>
                        </a>
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    <form className="contact-form" onSubmit={onSubmit}>
                        <div className="form-group">
                            <input type="text" name="name" placeholder="Name" required />
                            <div className="input-focus-line"></div>
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" placeholder="Email" required />
                            <div className="input-focus-line"></div>
                        </div>
                        <div className="form-group full-width">
                            <input type="text" name="subject" placeholder="Subject" required />
                            <div className="input-focus-line"></div>
                        </div>
                        <div className="form-group full-width">
                            <textarea name="message" placeholder="Message" rows="5" required></textarea>
                            <div className="input-focus-line"></div>
                        </div>

                        <div className="form-group full-width" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <button type="submit" className="submit-btn" style={{ marginTop: 0 }}>
                                <span>Send Message</span>
                                <FiSend />
                            </button>
                            {result && (
                                <span style={{
                                    color: result.includes("Success") ? '#10b981' : '#ef4444',
                                    fontWeight: 500,
                                    marginTop: '0.5rem'
                                }}>
                                    {result}
                                </span>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
