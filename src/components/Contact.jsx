import React from 'react';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';


export default function Contact() {
    return (
        <section id="contact" className="contact-section">
            <h2>Contact Me</h2>
            <p className="contact-description">
                Interested in working together or just want to say hi? Reach out via any platform below!
            </p>

            <div className="contact-icons">
                <a
                    href="mailto:skylermclain@outlook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Email"
                    className="contact-icon"
                >
                    📧
                </a>
                <a
                    href="https://github.com/shalestorm"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="contact-icon"
                >
                    <FaGithub size={28} />
                </a>
                <a
                    href="https://linkedin.com/in/skylermclain"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="contact-icon"
                >
                    <FaLinkedin size={28} />
                </a>
            </div>
            <div>

                <p>If You're Hiring</p>
                <motion.a
                    href="Resume_Sky.pdf"
                    download
                    className="resume-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <FaDownload style={{ marginRight: '0.5rem' }} />
                    Download Resume
                </motion.a>
            </div>
        </section>
    );
}
