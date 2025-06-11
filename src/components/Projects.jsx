import React, { useState } from 'react';
import projects from '../data/projects';
import { motion } from 'framer-motion';


export default function Projects() {
    const [flippedId, setFlippedId] = useState(null);

    const handleFlip = (id) => {
        setFlippedId(flippedId === id ? null : id);
    };

    return (
        <section id="projects" className="projects-section">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projects.map(({ id, title, description, tech, demoLink, repoLink, screenshot }) => (
                    <div key={id} className="flip-card" onClick={() => handleFlip(id)}>
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
                                            objectFit: 'fill',
                                            borderRadius: '8px',
                                        }}
                                    />
                                )}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
}
