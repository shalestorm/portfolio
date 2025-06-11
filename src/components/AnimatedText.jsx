import React, { useState, useEffect } from 'react';

const texts = [
    'Full-Stack Developer',
    'Python Enthusiast',
    'React Specialist',
    'Creative Coder',
    'Software Engineer',
    'LeetCode Legend',
    'Team Player',
    'Husband',
    'Learner'
];

export default function AnimatedText() {
    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        let timeout;

        if (typing) {
            if (displayText.length < texts[index].length) {
                timeout = setTimeout(() => {
                    setDisplayText(texts[index].slice(0, displayText.length + 1));
                }, 100);
            } else {
                timeout = setTimeout(() => setTyping(false), 1000);
            }
        } else {
            if (displayText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayText(displayText.slice(0, -1));
                }, 50);
            } else {
                setTyping(true);
                setIndex((prev) => (prev + 1) % texts.length);
            }
        }

        return () => clearTimeout(timeout);
    }, [displayText, typing, index]);

    return <span className="animated-text">{displayText}<span className="cursor"></span></span>;
}
