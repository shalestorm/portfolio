import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

export default function Navbar() {
    const [active, setActive] = useState('hero');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = ['hero', 'projects', 'skills', 'contact'];
            let current = 'hero';
            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element && window.scrollY >= element.offsetTop - 60) {
                    current = section;
                }
            });
            setActive(current);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="nav-container">
                <div className="nav-logo" onClick={() => scroll.scrollToTop()}>
                    SkylerMcLain
                </div>
                <ul className="nav-links">
                    {['Me', 'projects', 'skills', 'contact'].map((section) => (
                        <li key={section}>
                            <Link
                                to={section}
                                smooth={true}
                                duration={500}
                                offset={-50}
                                className={active === section ? 'active' : ''}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
