import React, { useState } from 'react';
import { motion } from 'framer-motion';

const skills = [
    'JavaScript',
    'React',
    'Python',
    'FastAPI',
    'PostgreSQL',
    'HTML5',
    'CSS3',
    'Git',
    'Node.js',
    'Docker',
    'REST APIs',
    'Debugging',
    'Project Management',
    'Adobe Suite',
    'Responsive Design',
    'Problem Solving',
    'Collaboration',
];

// Parent container variants (unchanged)
const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.1,
            when: 'beforeChildren',
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

// Skill tag variants
const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { type: 'spring', stiffness: 200, damping: 15 },
    },
    hover: {
        scale: 1.05,
        boxShadow: '0 0 10px #00fff7, 0 0 20px #00fff7',
        transition: { type: 'spring', stiffness: 300, damping: 20 },
    },
};

export default function Skills() {
    // Track tilt rotation state for each tag, keyed by skill name
    const [tilt, setTilt] = useState({});

    // Update tilt on mouse move relative to center of target element
    const handleMouseMove = (e, skill) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left; // x inside element
        const y = e.clientY - rect.top;  // y inside element

        // Calculate rotation max 10deg in either direction
        const rotateX = ((y / rect.height) - 0.5) * 20; // invert Y axis for natural tilt
        const rotateY = ((x / rect.width) - 0.5) * 20;

        setTilt((prev) => ({
            ...prev,
            [skill]: { rotateX: -rotateX, rotateY }, // negative rotateX flips tilt direction
        }));
    };

    const handleMouseLeave = (skill) => {
        setTilt((prev) => ({
            ...prev,
            [skill]: { rotateX: 0, rotateY: 0 },
        }));
    };

    return (
        <motion.section
            id="skills"
            className="skills-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <h2>Skills</h2>
            <div className="skills-container">
                <motion.div className="skills-grid">
                    {skills.map((skill) => (
                        <motion.span
                            key={skill}
                            className="skill-tag"
                            variants={skillVariants}
                            whileHover="hover"
                            style={{
                                rotateX: tilt[skill]?.rotateX || 0,
                                rotateY: tilt[skill]?.rotateY || 0,
                                transformStyle: 'preserve-3d',
                            }}
                            onMouseMove={(e) => handleMouseMove(e, skill)}
                            onMouseLeave={() => handleMouseLeave(skill)}
                        >
                            {skill}
                        </motion.span>
                    ))}
                </motion.div>
                <motion.div
                    className="skills-description"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <p>
                        Over the years, I have cultivated a strong foundation in frontend and backend technologies,
                        focusing on modern JavaScript frameworks like React and backend frameworks like FastAPI.
                        I'm most comfortable with building scalable, performant web applications and have hands-on
                        experience working with databases such as PostgreSQL. My problem-solving skills and
                        collaborative approach help me deliver projects efficiently and creatively.
                    </p>
                    <p>
                        These skills have been honed through personal projects, coursework, and professional experiences,
                        making me confident in tackling complex technical challenges and navigating collaborative efforts.
                    </p>
                </motion.div>
            </div>
        </motion.section>
    );
}
