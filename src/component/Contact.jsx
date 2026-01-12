import React, { useState, useContext } from 'react';
import '../Style/Contact.css';
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiSend } from "react-icons/fi";
import { DataContext } from '../context/DataContext';

const iconMap = {
    FiGithub: FiGithub,
    FiLinkedin: FiLinkedin,
    FiInstagram: FiInstagram,
    FiMail: FiMail
};

const Contact = () => {
    const { data, loading } = useContext(DataContext);
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", data?.contact?.accessKey);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const dataRes = await response.json();

            if (dataRes.success) {
                setResult("Form Submitted Successfully");
                event.target.reset();
            } else {
                console.error("Error", dataRes);
                setResult(dataRes.message);
            }
        } catch (error) {
            console.error("Error", error);
            setResult("Something went wrong. Please try again.");
        }
    };

    if (loading) return <div>Loading...</div>;

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
                        {data?.contact?.social?.map((social, index) => {
                            const Icon = iconMap[social.icon];
                            return (
                                <a key={index} href={social.url} target={social.name === 'Email' ? "_self" : "_blank"} rel="noopener noreferrer" className="social-item">
                                    <div className="icon-box">
                                        {Icon && <Icon />}
                                    </div>
                                    <span>{social.name}</span>
                                </a>
                            );
                        })}
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
