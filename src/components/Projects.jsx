import React, { useState } from 'react';
import projects from '../data/projects';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40, rotate: -5, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        rotate: 0,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 15,
        },
    },
};

export default function Projects() {
    const [flippedId, setFlippedId] = useState(null);

    const handleFlip = (id) => {
        setFlippedId(flippedId === id ? null : id);
    };

    return (
        <motion.section
            id="projects"
            className="projects-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <h2>Projects</h2>
            <motion.div className="projects-grid" variants={containerVariants}>
                {projects.map(({ id, title, description, tech, demoLink, repoLink, screenshot }) => (
                    <motion.div
                        key={id}
                        className="flip-card"
                        onClick={() => handleFlip(id)}
                        variants={cardVariants}
                        whileHover={{ scale: 1.03 }}
                    >
                        <motion.div
                            className="flip-card-inner"
                            animate={{ rotateY: flippedId === id ? 180 : 0 }}
                            transition={{ duration: 0.1 }}
                        >
                            <div className="flip-card-front">
                                <h3>{title}</h3>
                                <p>{description}</p>
                                <div className="tech-tags">
                                    {tech.map((tag) => (
                                        <span key={tag} className="tech-tag">{tag}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                                    <a href={repoLink} target="_blank" rel="noopener noreferrer">Source Code</a>
                                </div>
                            </div>
                            <div className="flip-card-back">
                                {screenshot && (
                                    <img
                                        src={screenshot}
                                        alt={`${title} screenshot`}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            borderRadius: '8px',
                                        }}
                                    />
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
}
